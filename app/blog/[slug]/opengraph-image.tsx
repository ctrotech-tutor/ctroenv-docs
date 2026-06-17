import { ImageResponse } from "next/og"
import { getAllPosts } from "@/lib/blog"
import {
  OgContainer,
  OgSmallLogo,
  OgAccentLine,
  OgTagPill,
  OG_WIDTH,
  OG_HEIGHT,
} from "@/lib/og-image"

export const size = { width: OG_WIDTH, height: OG_HEIGHT }
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
  const tags = post?.tags ?? []

  return new ImageResponse(
    <OgContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <OgSmallLogo label="Blog" />
        <div
          style={{
            fontSize: "38px",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
            textAlign: "center",
            maxWidth: "650px",
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#94a3b8",
              marginTop: "14px",
              textAlign: "center",
              maxWidth: "550px",
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        )}
        {tags.length > 0 && (
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {tags.map((tag) => (
              <OgTagPill key={tag}>{tag}</OgTagPill>
            ))}
          </div>
        )}
        <OgAccentLine />
      </div>
    </OgContainer>,
    { ...size },
  )
}
