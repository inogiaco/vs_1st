import { getMembers } from '@/lib/microcms'
import Link from 'next/link'

export const revalidate = 60

export default async function MembersPage() {
  try {
    const members = await getMembers()
    
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">メンバー紹介</h1>
          <Link href="/" className="text-primary hover:underline">
            ← ホームに戻る
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div key={member.id} className="text-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              {/* Photo */}
              <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
                {member.photo ? (
                  <img 
                    src={member.photo.url} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Name and Position */}
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-primary font-medium mb-4">{member.position}</p>

              {/* Bio */}
              {member.bio && (
                <div className="text-left">
                  <h3 className="font-semibold mb-2 text-center">プロフィール</h3>
                  <div 
                    className="text-gray-700 text-sm leading-relaxed prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {members.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">メンバー情報がまだありません</p>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
            ホームに戻る
          </Link>
        </div>
      </main>
    )
  } catch (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">メンバー紹介</h1>
        <div className="text-center py-12">
          <p className="text-red-500 mb-4">メンバー情報の読み込みに失敗しました</p>
          <Link href="/" className="text-primary hover:underline">
            ホームに戻る
          </Link>
        </div>
      </main>
    )
  }
}