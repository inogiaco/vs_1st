import Link from 'next/link'

export default function Menu() {
  return (
    <div className="box-border content-stretch flex flex-row font-bold gap-[30px] items-center justify-start leading-[0] not-italic p-0 relative text-[#ffffff] text-[20px] text-left text-nowrap">
      <Link href="/articles" className="relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="block leading-[normal] text-nowrap whitespace-pre text-white">
          ニュース
        </p>
      </Link>
      <Link href="/members" className="relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="block leading-[normal] text-nowrap whitespace-pre text-white">
          メンバー
        </p>
      </Link>
      <Link href="/contact" className="relative shrink-0 hover:opacity-80 transition-opacity">
        <p className="block leading-[normal] text-nowrap whitespace-pre text-white">
          お問い合わせ
        </p>
      </Link>
    </div>
  )
}