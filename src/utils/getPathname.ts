import { defaultLang } from "~/i18n/ui";

export default function getPathname(path: string, lang: string) {
  let newPath: string;
  let isDefault = false;

  if (defaultLang === lang) {
    isDefault = true;
    const [_, ...pathname] = path.split("/");
    newPath = `${pathname.join("/")}`;
  } else {
    const [_, __, ...pathname] = path.split("/");
    newPath = `${pathname.join("/")}`;
  }

  return [newPath, isDefault];
}
