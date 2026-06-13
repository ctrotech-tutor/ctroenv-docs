import { notFound } from "next/navigation"

import GettingStarted from "@/content/docs/getting-started.mdx"
import QuickStart from "@/content/docs/getting-started/quick-start.mdx"
import CoreConcepts from "@/content/docs/getting-started/core-concepts.mdx"
import DefineEnv from "@/content/docs/core/define-env.mdx"
import StringValidator from "@/content/docs/core/string.mdx"
import NumberValidator from "@/content/docs/core/number.mdx"
import BooleanValidator from "@/content/docs/core/boolean.mdx"
import PickValidator from "@/content/docs/core/pick.mdx"
import ChainableMethods from "@/content/docs/core/chainable.mdx"
import Refinements from "@/content/docs/core/refinements.mdx"
import Errors from "@/content/docs/core/errors.mdx"
import CliOverview from "@/content/docs/cli/index.mdx"
import CliValidate from "@/content/docs/cli/validate.mdx"
import CliGenerate from "@/content/docs/cli/generate.mdx"
import CliCheck from "@/content/docs/cli/check.mdx"
import CliDocs from "@/content/docs/cli/docs.mdx"
import CliInit from "@/content/docs/cli/init.mdx"
import CliConfig from "@/content/docs/cli/configuration.mdx"
import NodeAdapter from "@/content/docs/node.mdx"
import ViteAdapter from "@/content/docs/vite.mdx"
import NextjsAdapter from "@/content/docs/nextjs.mdx"
import MigrationFromT3 from "@/content/docs/migration/from-t3-env.mdx"
import MigrationFromEnvalid from "@/content/docs/migration/from-envalid.mdx"
import MigrationFromDotenv from "@/content/docs/migration/from-dotenv.mdx"

const pageMap: Record<string, React.ComponentType> = {
  "getting-started": GettingStarted,
  "getting-started/quick-start": QuickStart,
  "getting-started/core-concepts": CoreConcepts,
  "core/define-env": DefineEnv,
  "core/string": StringValidator,
  "core/number": NumberValidator,
  "core/boolean": BooleanValidator,
  "core/pick": PickValidator,
  "core/chainable": ChainableMethods,
  "core/refinements": Refinements,
  "core/errors": Errors,
  cli: CliOverview,
  "cli/validate": CliValidate,
  "cli/generate": CliGenerate,
  "cli/check": CliCheck,
  "cli/docs": CliDocs,
  "cli/init": CliInit,
  "cli/configuration": CliConfig,
  node: NodeAdapter,
  vite: ViteAdapter,
  nextjs: NextjsAdapter,
  "migration/from-t3-env": MigrationFromT3,
  "migration/from-envalid": MigrationFromEnvalid,
  "migration/from-dotenv": MigrationFromDotenv,
}

export function generateStaticParams() {
  return Object.keys(pageMap).map((path) => ({
    slug: path.split("/"),
  }))
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const path = slug?.join("/") || "getting-started"
  const Content = pageMap[path]
  if (!Content) notFound()
  return <Content />
}
