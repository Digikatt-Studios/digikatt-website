import WIPBanner from "@/components/wip-banner";
import getTitle from "@/utils/get-title";
import { Head } from "vike-solid/Head";

export default function ConceptArtsPage() {
  return (
    <>
      <Head>
        <title>{getTitle("Concept Art")}</title>
        <meta name="description" content="Digikatt Studios" />
        <meta name="keywords" content="mobile,games,digikatt studios,digikatt,chromeleon" />
      </Head>
      <div class="mx-auto w-full max-w-7xl px-6">
        <WIPBanner>Concept Arts page is undercooked.</WIPBanner>
      </div>
    </>
  );
}
