"use client"
import test from '@/app/assets/images/bgBanner.webp'
import Image from 'next/image'
import { UseTradingNews } from '../hooks/articles/UseTradingNews'
import Loading from './Loading'
import ErrorFetch from './ErrorFetch'

type TradingArticles = {
    title: string
    description: string
    url: string
    urlToImage: string,
    publishedAt: string
}
const TradingArticles = () => {

    const { data: tradingArticles, isError, isLoading } = UseTradingNews()
    return (
        <>
            {
                isError ?
                    <ErrorFetch />
                    :

                    <div className="w-[40%] h-full hidden lg:block">


                        <h3 className="font-bold text-xl">Trading News</h3>

                        <div className={` mt-10 relative cursor-pointer`}>
                            <Image src={tradingArticles?.articles[0].urlToImage ?? test} alt="" className='w-full object-cover object-center rounded-md' width={1000} height={1000} />
                            {
                                isLoading ?
                                    <Loading />
                                    :

                                    <div className="text-white px-3 top-16 left-7 absolute">
                                        <a href={tradingArticles?.articles[0].url} target='_blank' className="text-xl font-semibold ">{tradingArticles?.articles[0].title}</a>
                                    </div>
                            }
                        </div>



                        <div className="flex flex-col gap-4 mt-14">

                            {
                                tradingArticles?.articles.slice(1, tradingArticles.articles.length).map((data: TradingArticles, i: number) => {
                                    const { title, urlToImage, url, publishedAt } = data
                                    const date = new Date(publishedAt).toDateString()

                                    return <div key={i} className="flex gap-5 w-full h-24 cursor-pointer group" >
                                        <Image src={urlToImage ?? test} alt="" className='w-24 rounded-md object-cover' width={1000} height={1000} />
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
