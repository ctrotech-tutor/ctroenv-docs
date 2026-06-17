import { ImageResponse } from "next/og"
import { getAllPosts } from "@/lib/blog"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = getAllPosts()
  const post = posts.find((p) => p.slug === slug)

  const title = post?.title ?? "CtroEnv Blog"
  const description = post?.description ?? ""

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "#94a3b8",
              marginTop: "20px",
              textAlign: "center",
              maxWidth: "550px",
            }}
          >
            {description}
          </div>
        )}
        <div
          style={{
            marginTop: "32px",
            fontSize: "16px",
            fontWeight: 500,
            color: "#64748b",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          CtroEnv Blog
        </div>
      </div>
    ),
    { ...size }
  )
}
