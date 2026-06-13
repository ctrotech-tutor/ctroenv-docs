export default function RootLoading() {
  return (
    <div className="flex items-center justify-center py-20 animate-pulse">
      <div className="space-y-4 max-w-3xl w-full px-4">
        <div className="h-4 w-48 rounded bg-muted" />
        <div className="h-8 w-96 rounded bg-muted" />
        <div className="h-3 w-32 rounded bg-muted" />
        <div className="space-y-2 mt-8">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-4/6 rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-3/6 rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}
