export interface RawPost {
  slug: string
  content: string
}

const raw = `---
title: "day i switched to omarchy + lazyvim"
description: "My experience switching to Omarchy and LazyVim setup"
date: "March 6, 2026"
externalUrl: "https://app.notion.com/p/Day-I-Switched-to-Omarchy-LazyVim-352561d525128099bf21e1fdfc18cd91?source=copy_link"
---

this post has been moved to notion. click the link to read it there.
`

export const postsData: RawPost[] = [
  { slug: "lazyvim-switch", content: raw },
]
