import { createClient } from 'microcms-js-sdk'
import type { Article, Member } from '@/types/microcms'

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required')
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required')
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export async function getArticles() {
  const data = await client.get<{ contents: Article[] }>({
    endpoint: 'articles',
  })
  return data.contents
}

export async function getArticle(id: string) {
  const data = await client.get<Article>({
    endpoint: 'articles',
    contentId: id,
  })
  return data
}

export async function getMembers() {
  const data = await client.get<{ contents: Member[] }>({
    endpoint: 'members',
  })
  return data.contents
}