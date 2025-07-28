import { getArticles, getMembers } from '@/lib/microcms'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const revalidate = 60

export default async function HomePage() {
  try {
    const [articles, members] = await Promise.all([
      getArticles(),
      getMembers()
    ])

    const latestArticles = articles.slice(0, 3)

    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">問題解決:ようは会ラジオ</h1>
          <p className="text-lg text-gray-600 mb-6">問題解決力を高める読み物+動画コンテンツ</p>
          <Link href="/articles" className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
            記事を読む
          </Link>
        </section>

        {/* Latest Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">最新記事</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.id}`} className="block">
                <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-bold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    カテゴリ: {article.category.join(', ')}
                  </p>
                  {article.summary && (
                    <p className="text-gray-600 text-sm">{article.summary}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/articles" className="text-primary hover:underline">
              記事一覧を見る →
            </Link>
          </div>
        </section>

        {/* Members Teaser */}
        <section>
          <h2 className="text-2xl font-bold mb-6">メンバー</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {members.slice(0, 3).map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                  {member.photo ? (
                    <img 
                      src={member.photo.url} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      写真
                    </div>
                  )}
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/members" className="text-primary hover:underline">
              メンバー一覧を見る →
            </Link>
          </div>
        </section>
        </main>
        <Footer />
      </>
    )
  } catch (error) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">問題解決:ようは会ラジオ</h1>
          <div className="text-center">
            <p className="text-red-500 mb-4">データの読み込みに失敗しました</p>
            <p className="text-sm text-gray-500">環境変数とmicroCMSの設定を確認してください</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}