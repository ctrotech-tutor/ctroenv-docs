"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export function useScrollDirection() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  const isDocsPage = pathname.startsWith("/docs")

  useEffect(() => {
    lastScrollY.current = 0
    ticking.current = false
    Promise.resolve().then(() => setVisible(true))
  }, [pathname])

  useEffect(() => {
    if (!isDocsPage) return

    let isMobile = window.innerWidth < 768
    const handleResize = () => {
      isMobile = window.innerWidth < 768
    }
    window.addEventListener("resize", handleResize, { passive: true })

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        if (!isMobile) {
          setVisible(true)
        } else {
          const current = window.scrollY
          setVisible(current < lastScrollY.current || current < 50)
          lastScrollY.current = current
        }
        ticking.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [isDocsPage])

  return { visible }
}
