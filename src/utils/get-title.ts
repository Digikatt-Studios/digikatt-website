const TITLE_TEMPLATE = "%s | Digikatt Studios";

export default function getTitle(title: string = "Home") {
  return TITLE_TEMPLATE.replace("%s", title);
}
