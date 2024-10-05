import { ImgHeroBg } from "@/assets/images";
import getTitle from "@/utils/get-title";
import { JSX } from "solid-js";

import { Head } from "vike-solid/Head";
export default function Page() {
  return (
    <>
      <Head>
        <title>{getTitle("Home")}</title>
        <meta name="description" content="Digikatt Studios" />
        <meta name="keywords" content="mobile,games,digikatt studios,digikatt,chromeleon" />
      </Head>

      <section class="relative">
        <div
          class="absolute inset-0 opacity-20 blur-sm"
          style={{
            "background-image": `url(${ImgHeroBg})`,
            "background-size": "cover",
            "background-position": "center",
          }}
        />
        <div class="relative mx-auto w-full max-w-7xl px-6 py-32">
          <h1 class="text-5xl font-semibold tracking-tighter text-orange-500">
            Chase and Catch Your Dreams!
          </h1>

          <p class="mb-4 mt-4 max-w-md">
            We're a rag-tag team of Filipino game devs. Started in 2017, we're just a bunch of nerds
            coming together to make games again.
          </p>

          <button class="rounded-xl border border-orange-300 bg-orange-500 px-10 py-2 text-white">
            Check our Games
          </button>
        </div>
      </section>

      <div class="bg-orange-400">
        <div class="mx-auto w-full max-w-7xl bg-orange-400 px-6 py-6 pb-10">
          <h2 class="mt-4 text-center font-bold text-white">Our Games</h2>

          <div class="h-12" />

          <div class="flex flex-wrap items-center justify-center gap-10">
            <GameCard
              title="Chromeleon"
              imageSrc="https://s.cafebazaar.ir/images/upload/screenshot/com.DigikattStudios.Chromeleon-7112843c-b3f5-4363-a595-4714333cb562.png?x-img=v1/resize,h_600,lossless_false/optimize"
            />
            <GameCard
              title="Highway Blade"
              imageSrc="https://media.tenor.com/5yrCRNv4v7gAAAAM/axel-digikatt.gif"
            />
          </div>
        </div>
      </div>

      <div class="mx-auto flex max-w-7xl flex-col gap-y-4 px-6 py-20">
        <h2 class="text-3xl">🥘 We're cooking</h2>

        <p>Currently we have nothing to show, but we will soon. Hope you guys are excited!</p>
      </div>
    </>
  );
}

type GameCardProps = {
  title: JSX.Element;
  imageSrc?: string;
};
function GameCard(props: GameCardProps) {
  return (
    <div class="relative h-96 w-96">
      <div class="absolute inset-0 rounded-3xl bg-gradient-to-b from-orange-500/20 to-orange-400/20 mix-blend-multiply"></div>
      <div class="absolute inset-0 rotate-6 rounded-3xl border bg-white"></div>

      <div class="relative flex h-full rotate-6 flex-col gap-5 p-6">
        <img
          class="h-full w-full overflow-hidden rounded-2xl bg-neutral-200 object-cover"
          src={props.imageSrc}
        />

        <div class="flex items-center justify-between gap-x-3">
          <h3 class="font-medium">{props.title}</h3>

          <div class="flex gap-x-1">
            <span class="rounded-full border border-orange-500 px-1.5 py-0.5 text-xs text-orange-400">
              Android
            </span>
            <span class="rounded-full border border-orange-500 px-1.5 py-0.5 text-xs text-orange-400">
              iOS
            </span>
            <span class="rounded-full border border-orange-500 px-1.5 py-0.5 text-xs text-orange-400">
              In Development
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
