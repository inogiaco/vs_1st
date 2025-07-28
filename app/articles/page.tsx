import { getArticles } from '@/lib/microcms'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const revalidate = 60

export default async function ArticlesPage() {
  try {
    const articles = await getArticles()
    
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">記事一覧</h1>
          <Link href="/" className="text-primary hover:underline">
            ← ホームに戻る
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`} className="block">
              <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {article.eyecatch && (
                  <img 
                    src={article.eyecatch.url}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h2>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>カテゴリ: {article.category.join(', ')}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                  </div>
                  {article.summary && (
                    <p className="text-gray-700 text-sm line-clamp-3">{article.summary}</p>
                  )}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">記事がまだありません</p>
          </div>
        )}
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">記事一覧</h1>
        <div className="text-center py-12">
          <p className="text-red-500 mb-4">記事の読み込みに失敗しました</p>
          <Link href="/" className="text-primary hover:underline">
            ホームに戻る
          </Link>
        </div>
        </main>
        <Footer />
      </>
    )
  }
}