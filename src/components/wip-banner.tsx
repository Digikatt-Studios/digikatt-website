import { FlowProps, JSX } from "solid-js";

type WIPBannerProps = {
  children?: JSX.Element;
};

export default function WIPBanner(props: FlowProps<WIPBannerProps>) {
  return (
    <div class="flex items-center gap-x-2 rounded-md border border-yellow-400 bg-yellow-400/20 p-5 text-center text-yellow-600">
      <span class="text-3xl">🐣</span>
      {props.children}
    </div>
  );
}
