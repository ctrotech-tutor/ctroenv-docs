import { PackageTabs } from "./package-tabs";

const INSTALL_COMMANDS = [
  {
    label: "npm",
    title: "npm install",
    lang: "bash",
    code: "npm install @ctroenv/core",
  },
  {
    label: "pnpm",
    title: "pnpm add",
    lang: "bash",
    code: "pnpm add @ctroenv/core",
  },
  {
    label: "yarn",
    title: "yarn add",
    lang: "bash",
    code: "yarn add @ctroenv/core",
  },
  {
    label: "bun",
    title: "bun add",
    lang: "bash",
    code: "bun add @ctroenv/core",
  },
];

export function InstallTabs() {
  return <PackageTabs tabs={INSTALL_COMMANDS} />;
}
