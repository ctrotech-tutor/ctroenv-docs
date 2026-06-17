import Link from "next/link"
import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "CtroEnv release notes, changelogs, and announcements.",
  openGraph: {
    title: "Blog — CtroEnv",
    description: "CtroEnv release notes, changelogs, and announcements.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — CtroEnv",
    description: "CtroEnv release notes, changelogs, and announcements.",
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted-foreground">Release notes, changelogs, and announcements.</p>
      {posts.length === 0 && (
        <p className="mt-10 text-muted-foreground">No posts yet.</p>
      )}
      <div className="mt-10 flex flex-col gap-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <time className="text-sm text-muted-foreground">{post.date}</time>
              <h2 className="mt-1 text-xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-1 text-muted-foreground">{post.description}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
