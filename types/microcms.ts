export interface Article {
  id: string
  title: string
  body: string
  youtubeId?: string
  category: 'tutorial' | 'interview' | 'case-study' | 'news'
  eyecatch?: {
    url: string
    width: number
    height: number
  }
  tags?: string[]
  summary?: string
  publishedAt: string
  createdAt: string
  updatedAt: string
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
}