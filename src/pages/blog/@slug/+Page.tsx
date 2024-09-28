import { usePageContext } from "vike-solid/usePageContext";

export default function BlogSlugPage() {
  const pageContext = usePageContext();

  return <>Blog Slug! {JSON.stringify(pageContext.routeParams.slug)}</>;
}
