export const revalidate = 60

export default async function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">問題解決:ようは会ラジオ</h1>
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-4">問題解決力を高める読み物+動画コンテンツ</p>
        <p className="text-sm text-gray-500">microCMSの設定が完了すると、記事とメンバー情報が表示されます</p>
      </div>
    </main>
  )
}