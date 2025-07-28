import { getArticle } from '@/lib/microcms'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

export const revalidate = 60

interface ArticlePageProps {
  params: { id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  try {
    const article = await getArticle(params.id)
    
    return (
      <>
        <Header />
        <div className="flex flex-col gap-20 items-center justify-start px-5 py-[50px] w-full">
          {/* Content Header */}
          <div className="flex flex-col items-start justify-start p-0 w-full max-w-[1080px]">
            <div className="flex flex-col gap-10 items-start justify-start p-0 w-full">
              <h1 className="font-bold text-[#ca0f18] text-[36px] leading-normal w-full">
                {article.title}
              </h1>
            </div>
            <div className="flex flex-col items-start justify-start pb-5 pt-[50px] px-0 w-full">
              {article.summary && (
                <p className="font-normal text-[#333333] text-[24px] leading-normal min-w-full mb-5">
                  {article.summary}
                </p>
              )}
              <div className="flex flex-row gap-[50px] items-start justify-start font-normal text-[#333333] text-[24px] leading-normal pt-5">
                <div>
                  {new Date(article.publishedAt).toLocaleDateString('ja-JP')}
                </div>
                <div>
                  {article.category.join(', ')}
                </div>
              </div>
            </div>
          </div>

          {/* Content Main */}
          <div className="flex flex-col gap-20 items-center justify-start pb-[50px] pt-0 px-0 w-full">
            <div className="flex flex-col gap-20 items-start justify-start p-0 w-full max-w-[1080px]">
              {/* Featured Image */}
              {article.eyecatch && (
                <div 
                  className="bg-center bg-cover bg-no-repeat h-[567px] w-full"
                  style={{ backgroundImage: `url('${article.eyecatch.url}')` }}
                />
              )}

              {/* YouTube Embed */}
              {article.youtubeId && (
                <div className="w-full">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${article.youtubeId}?rel=0&modestbranding=1`}
                      title={`${article.title} - 関連動画`}
                      className="w-full h-full"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div 
                className="font-normal text-[#000000] text-[20px] leading-normal w-full"
                dangerouslySetInnerHTML={{ __html: article.body }}
              />
            </div>

            {/* Back Button */}
            <div className="flex flex-col items-start justify-start p-0 rounded-[10px]">
              <Button href="/articles">
                記事一覧に戻る
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  } catch (error) {
    notFound()
  }
}