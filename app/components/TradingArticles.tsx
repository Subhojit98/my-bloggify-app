"use client"
import test from '@/app/assets/images/bgBanner.webp'
import Image from 'next/image'
import Loading from './Loading'
import ErrorFetch from './ErrorFetch'

type TradingNewsProps = {
    title: string,
    description: string,
    url: string,
    image: string,
    publishedAt: string

}

const TradingArticles = ({ tradingNews }: { tradingNews: any }) => {

    const { recentArticlesData: tradingArticles, isError, isLoading } = tradingNews
    return (
        <>
            {
                isError ?
                    <ErrorFetch />
                    :

                    <div className="w-[40%] h-full hidden lg:block">


                        <h3 className="font-bold text-xl">Trading News</h3>

                        <div className={` mt-10 relative cursor-pointer`}>
                            <Image src={tradingArticles?.articles[3].image ?? test} alt="" className='w-full object-cover object-center rounded-md' width={1000} height={1000} />
                            {
                                isLoading ?
                                    <Loading />
                                    :

                                    <div className="text-white px-3 top-16 left-7 absolute">
                                        <a href={tradingArticles?.articles[3].url} target='_blank' className="text-xl font-semibold ">{tradingArticles?.articles[3].title.split('').splice(0, 80).join("")}...</a>
                                    </div>
                            }
                        </div>



                        <div className="flex flex-col gap-4 mt-14">

                            {
                                tradingArticles?.articles.slice(5, 10).map((data: any, i: number) => {
                                    const { title, image, url, publishedAt } = data

                                    const date = new Date(publishedAt).toDateString()

                                    return <div key={i} className="flex gap-5 w-full h-24 cursor-pointer group" >
                                        <Image src={image ?? test} alt="" className='w-24 rounded-md object-cover' width={1000} height={1000} />
                                        <a href={url} target='_blank'>
                                            <h4 className="font-medium group-hover:underline">{title.split('').splice(0, 50).join("")}..</h4>
                                            <span className="text-xs mt-2 font-light text-gray-500">{date}</span>
                                        </a>

                                    </div>
                                })

                            }

                        </div>


                    </div>
            }
        </>
    )
}

export default TradingArticles
