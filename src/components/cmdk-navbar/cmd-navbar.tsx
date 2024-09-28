import { Dialog } from "@kobalte/core/dialog";
import { Command } from "cmdk-solid";
import { createSignal, For, JSX, Show, VoidProps } from "solid-js";

import { useHotkeys } from "bagon-hooks";

import "./cmd-navbar.css";

type CMDNavBarProps = {};

export function CMDNavBar(props: VoidProps<CMDNavBarProps>) {
  let ref: HTMLDivElement;
  const [isOpen, setIsOpen] = createSignal(false);
  const [inputValue, setInputValue] = createSignal("");

  useHotkeys([
    // [
    //   "escape",
    //   () => {
    //     setIsOpen(false);

    //     console.log("ESCAPE1");
    //   },
    // ],
    [
      "mod+k",
      () => {
        setIsOpen(true);

        console.log("MOD + K");
      },
    ],
  ]);

  const [pages, setPages] = createSignal<string[]>(["home"]);
  const activePage = () => pages()[pages().length - 1];
  const isHome = () => activePage() === "home";

  const popPage = () => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      return x;
    });
  };

  function bounce() {
    if (ref) {
      ref.style.transform = "scale(0.96)";
      setTimeout(() => {
        if (ref) {
          ref.style.transform = "";
        }
      }, 100);

      setInputValue("");
    }
  }

  return (
    <Dialog open={isOpen()} onOpenChange={setIsOpen}>
      <Dialog.Trigger class="rounded-md border border-orange-200 p-2">Cmd + K</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/50" />

        <Dialog.Content class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
          <div class="cmd-navbar w-full md:w-[500px]">
            <Command
              ref={(el) => (ref = el)}
              onKeyDown={(e: KeyboardEvent) => {
                if (e.key === "Enter") {
                  bounce();
                }

                if (isHome() || inputValue().length) {
                  return;
                }

                if (e.key === "Backspace") {
                  e.preventDefault();
                  popPage();
                  bounce();
                }
              }}
            >
              <div>
                <For each={pages()}>{(page) => <div cmdk-vercel-badge="">{page}</div>}</For>
              </div>
              <Command.Input
                autofocus
                placeholder="What do you need?"
                onValueChange={(value) => {
                  setInputValue(value);
                }}
                onKeyDown={(event) => {
                  if (event.metaKey && event.key === "k") {
                    setIsOpen(setIsOpen(false));
                  }
                }}
              />
              <Command.List>
                <Command.Empty>No results found.</Command.Empty>
                {activePage() === "home" && (
                  <Home searchProjects={() => setPages([...pages(), "projects"])} />
                )}
                {activePage() === "projects" && <Projects />}
              </Command.List>
            </Command>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

function Home(props: { searchProjects: Function }) {
  return (
    <>
      <Command.Group heading="Projects">
        <Item
          shortcut="S P"
          onSelect={() => {
            props.searchProjects();
          }}
        >
          <ProjectsIcon />
          Search Projects...
        </Item>
        <Item>
          <PlusIcon />
          Create New Project...
        </Item>
      </Command.Group>
      <Command.Group heading="Teams">
        <Item shortcut="⇧ P">
          <TeamsIcon />
          Search Teams...
        </Item>
        <Item>
          <PlusIcon />
          Create New Team...
        </Item>
      </Command.Group>
      <Command.Group heading="Help">
        <Item shortcut="⇧ D">
          <DocsIcon />
          Search Docs...
        </Item>
        <Item>
          <FeedbackIcon />
          Send Feedback...
        </Item>
        <Item>
          <ContactIcon />
          Contact Support
        </Item>
      </Command.Group>
    </>
  );
}

function Projects() {
  return (
    <>
      <Item>Project 1</Item>
      <Item>Project 2</Item>
      <Item>Project 3</Item>
      <Item>Project 4</Item>
      <Item>Project 5</Item>
      <Item>Project 6</Item>
    </>
  );
}

function Item(props: {
  children: JSX.Element;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <Command.Item onSelect={props.onSelect}>
      {props.children}
      <Show when={props.shortcut}>
        <div cmdk-vercel-shortcuts="">
          <For each={props.shortcut!.split(" ")}>{(key) => <kbd>{key}</kbd>}</For>
        </div>
      </Show>
    </Command.Item>
  );
}

function ProjectsIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M3 3h7v7H3z"></path>
      <path d="M14 3h7v7h-7z"></path>
      <path d="M14 14h7v7h-7z"></path>
      <path d="M3 14h7v7H3z"></path>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M12 5v14"></path>
      <path d="M5 12h14"></path>
    </svg>
  );
}

function TeamsIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
      <path d="M16 3.13a4 4 0 010 7.75"></path>
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M8 17.929H6c-1.105 0-2-.912-2-2.036V5.036C4 3.91 4.895 3 6 3h8c1.105 0 2 .911 2 2.036v1.866m-6 .17h8c1.105 0 2 .91 2 2.035v10.857C20 21.09 19.105 22 18 22h-8c-1.105 0-2-.911-2-2.036V9.107c0-1.124.895-2.036 2-2.036z"></path>
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
      <path d="M14 2v6h6"></path>
      <path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
      <path d="M10 9H8"></path>
    </svg>
  );
}

function FeedbackIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      fill="none"
      height="24"
      shape-rendering="geometricPrecision"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <path d="M22 6l-10 7L2 6"></path>
    </svg>
  );
}
