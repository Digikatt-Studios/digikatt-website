import "@/styles/app.css";
import { createMemo, createSignal, type FlowProps } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";

export default function RootLayout(props: FlowProps) {
  const pageContext = usePageContext();

  return (
    <div class="min-h-screen flex flex-col">
      <nav class="flex gap-x-4 text-orange-500 p-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/dashboard">Dashboard</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/privacy-policy">Privacy Policy</NavLink>
        <Counter />
      </nav>

      <main class="flex-1">{props.children}</main>

      <footer class="px-5 py-4 text-orange flex gap-x-4">
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </footer>
    </div>
  );
}

function NavLink(props: { href: string; children: string }) {
  const pageContext = usePageContext();

  const isActive = createMemo(
    () =>
      props.href.slice(1).split("/").at(0) === pageContext.urlPathname?.slice(1).split("/").at(0)
  );

  return (
    <a
      href={props.href}
      classList={{
        "text-orange-500": true,
        "font-bold": isActive(),
        "border-b": isActive(),
      }}
    >
      {props.children}
    </a>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Root Counter {count()}
    </button>
  );
}
