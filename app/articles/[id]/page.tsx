import { getArticle } from '@/lib/microcms'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 60

interface ArticlePageProps {
  params: { id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    const article = await getArticle(params.id)
    
    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back to articles */}
        <div className="mb-6">
          <Link href="/articles" className="text-primary hover:underline">
            ← 記事一覧に戻る
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span>公開日: {new Date(article.publishedAt).toLocaleDateString('ja-JP')}</span>
            <span>カテゴリ: {article.category.join(', ')}</span>
          </div>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Eyecatch Image */}
        {article.eyecatch && (
          <div className="mb-8">
            <img 
              src={article.eyecatch.url} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* YouTube Embed */}
        {article.youtubeId && (
          <div className="mb-8">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${article.youtubeId}`}
                title={article.title}
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <article 
          className="prose prose-lg max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Summary */}
        {article.summary && (
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h3 className="font-bold mb-2">記事の概要</h3>
            <p className="text-gray-700">{article.summary}</p>
          </div>
        )}

        {/* Back to articles */}
        <div className="text-center">
          <Link href="/articles" className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
            記事一覧に戻る
          </Link>
        </div>
      </main>
    )
  } catch (error) {
    notFound()
  }
}