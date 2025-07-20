import { getArticle } from '@/lib/microcms'

export const revalidate = 60

interface ArticlePageProps {
  params: { id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // TODO: Implement article detail page with YouTube embed if youtubeId exists
  
  return (
    <main>
      <h1>記事詳細</h1>
      {/* TODO: Eyecatch image */}
      {/* TODO: YouTube embed (if youtubeId exists) */}
      {/* TODO: Rich text content */}
      {/* TODO: Tags */}
      {/* TODO: Related articles */}
    </main>
  )
}