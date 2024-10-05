import { CMDNavBar } from "@/components/cmdk-navbar/cmd-navbar";
import { PageRoutes } from "@/constants/page-routes";
import "@/styles/app.css";
import getTitle from "@/utils/get-title";
import { createMemo, createSignal, type FlowProps } from "solid-js";
import { Head } from "vike-solid/Head";
import { usePageContext } from "vike-solid/usePageContext";

export default function RootLayout(props: FlowProps) {
  const pageContext = usePageContext();

  return (
    <div class="flex min-h-screen flex-col">
      <Head>
        <title>{getTitle("Home")}</title>
        <meta
          name="description"
          content="Digikatt Studios is a rag-tag team of Filipino game devs."
        />
        <meta name="keywords" content="mobile,games,digikatt studios,digikatt,chromeleon" />
      </Head>

      <nav class="mx-auto flex w-full max-w-7xl items-center justify-between gap-x-10 p-4 px-6 text-orange-500">
        <div class="flex gap-x-10">
          <a href={PageRoutes.Home} class="flex-shrink-0 text-lg font-medium md:text-2xl">
            DIGIKATT STUDIOS
          </a>

          {/* <NavLink href={PageRoutes.About}>About</NavLink>
          <NavLink href={PageRoutes.Blog}>Blog</NavLink>
          <NavLink href={PageRoutes.Contact}>Contact</NavLink>
          <NavLink href={PageRoutes.ConceptArts}>Concept Arts</NavLink>
          <NavLink href={PageRoutes.Games}>Games</NavLink> */}
        </div>

        <CMDNavBar />
      </nav>

      <main class="flex-1">{props.children}</main>

      <footer class="relative flex flex-col items-center gap-x-4 bg-orange-400 px-5 py-4 text-white">
        <div class="absolute -top-10 text-7xl">🐈</div>

        <div class="h-12" />

        <div class="text-2xl font-medium">DIGIKATT STUDIOS</div>

        <div class="h-5" />

        <p class="text-orange-200">Iloilo City, Iloilo, Philippines</p>

        <div class="h-5" />

        <a href="mailto:digkattstudios@gmail.com" class="text-orange-50 underline">
          digikattstudios@gmail.com
        </a>

        <div class="h-5" />

        <ul class="flex gap-x-5 text-sm">
          <li>
            <a href={PageRoutes.Home}>Home</a>
          </li>

          <li>
            <a href={PageRoutes.PrivacyPolicy}>Privacy Policy</a>
          </li>
        </ul>
        <div class="h-12" />
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
