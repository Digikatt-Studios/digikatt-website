import WIPBanner from "@/components/wip-banner";
import getTitle from "@/utils/get-title";
import { Head } from "vike-solid/Head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{getTitle("Contact")}</title>
        <meta name="description" content="Digikatt Studios" />
        <meta name="keywords" content="mobile,games,digikatt studios,digikatt,chromeleon" />
      </Head>
      <div class="mx-auto w-full max-w-7xl px-6">
        <WIPBanner>Contact page is undercooked.</WIPBanner>
      </div>
    </>
  );
}
