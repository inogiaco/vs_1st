export interface Article {
  id: string
  title: string
  body: string
  youtubeId?: string
  category: string[]
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  tags?: string[]
  summary?: string
  publishedAt: string
  publishAt?: string
  createdAt: string
  updatedAt: string
  revisedAt: string
}

export interface Member {
  id: string
  name: string
  position: string
  bio?: string
  photo?: {
    url: string
    width: number
    height: number
  }
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}