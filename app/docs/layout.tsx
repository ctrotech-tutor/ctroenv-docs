import { Sidebar } from "@/components/layout/sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
