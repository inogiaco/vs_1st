import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="relative w-full h-[300px] min-h-[250px] flex flex-col justify-start overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img-mv.jpg"
          alt="Header background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 h-full flex flex-col gap-10">
        <nav className="flex justify-between items-center py-6 m-0 md:flex-row flex-col md:gap-0 gap-4">
          <Link 
            href="/" 
            className="text-3xl md:text-3xl text-2xl font-bold text-white transition-opacity duration-300 hover:opacity-80 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
          >
            ようは会ラジオ
          </Link>
          <ul className="flex list-none m-0 p-0 gap-8 md:gap-8 gap-2 flex-wrap justify-center">
            <li>
              <Link 
                href="/" 
                className="text-white no-underline font-medium transition-all duration-300 relative drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] py-2 px-4 rounded-md hover:opacity-80 hover:bg-white/10 md:text-base text-sm"
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link 
                href="/articles" 
                className="text-white no-underline font-medium transition-all duration-300 relative drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] py-2 px-4 rounded-md hover:opacity-80 hover:bg-white/10 md:text-base text-sm"
              >
                記事
              </Link>
            </li>
            <li>
              <Link 
                href="/members" 
                className="text-white no-underline font-medium transition-all duration-300 relative drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] py-2 px-4 rounded-md hover:opacity-80 hover:bg-white/10 md:text-base text-sm"
              >
                メンバー
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-white no-underline font-medium transition-all duration-300 relative drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] py-2 px-4 rounded-md hover:opacity-80 hover:bg-white/10 md:text-base text-sm"
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
        <div className="text-center text-white mb-10 md:mb-10 mb-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
          <h1 className="md:text-4xl text-3xl font-bold mb-3 leading-tight">問題解決：ようは会ラジオ</h1>
          <p className="md:text-lg text-base font-normal opacity-90 max-w-2xl mx-auto">問題解決力を高める読み物+動画コンテンツ</p>
        </div>
      </div>
    </header>
  )
}