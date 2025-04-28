import { lazy } from "react";

const ThemeSwitch = lazy(() =>
  import("./themeSwitch").then((module) => ({
    default: module.ThemeSwitch,
  }))
);

export function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">Habbit</h1>
      <ThemeSwitch />
    </div>
  );
}
