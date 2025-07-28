import Menu from '@/components/Menu'

export default function Footer() {
  return (
    <div
      className="bg-[#ca0f18] box-border content-stretch flex flex-col gap-5 items-center justify-start pb-[50px] pt-[30px] px-0 relative w-full"
      data-name="Footer"
    >
      <div
        className="box-border content-stretch flex flex-col font-['Noto_Sans_JP',_sans-serif] gap-[30px] items-start justify-start leading-[0] p-0 relative shrink-0 text-[#ffffff] text-[20px] w-[340px]"
      >
        <Menu />
        <div className="relative shrink-0 text-center w-full">
          <p className="block leading-[normal] text-white text-[14px]">
            copyright©問題解決を広める会
          </p>
        </div>
      </div>
    </div>
  )
}