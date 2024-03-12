"use client"
import Image from 'next/image'
import test from '@/app/assets/images/bgBanner.webp'
import clock from '@/app/assets/icons/clock.svg'
import blogsImage from '@/app/assets/images/icons8-task-100.png'
import { UsefetchRecentBlogs } from '../hooks/articles/UsefetchRecentBlogs'
import { useState } from 'react'
import TradingArticles from './TradingArticles'
import Loading from './Loading'
import ErrorFetch from './ErrorFetch'


type RecentArticles = {
    title: string
    description: string
    url: string
    urlToImage: string,
    publishedAt: string

}
const RecentNews = () => {

    const [pageCount, setPageCount] = useState(1)
    const { data: recentArticlesData, isError, isLoading } = UsefetchRecentBlogs(pageCount)
    return (
        <>
            <div className="w-[85%] m-auto mt-24">
                <div className="flex flex-col sm:flex-row mt-9 items-center  w-full">
                    <span className="rounded-full bg-slate-100">
                        <Image src={blogsImage} alt="" className="w-16 h-16 object-contain p-2 bg-slate-100 rounded-full" />
                    </span>

                    <div className="flex flex-col p-4">
                        <h1 className="text-3xl font-bold text-[#ffb000] sm:text-start text-center">Recent Articles</h1>
                        <p className="text-gray-500 mt-2 sm:text-start text-center">Get your self updated with the world wide events with us.</p>
                    </div>
                </div>

                {/* Recent Blogs -> */}
                <div className="h-full w-full mt-5 flex gap-6" id='latest-acticle-section'>

                    <div className="w-full justify-self-start flex flex-col gap-6 m-auto">
                        {isError && <ErrorFetch />}
                        {isLoading && <Loading />}
                        <div className='flex flex-col items-center md:items-start gap-10 h-full'>
                            {
                                recentArticlesData?.articles.map((data: RecentArticles, i: number) => {

                                    const { title, description, url, urlToImage, publishedAt } = data

                                    const timeElapsed = (dateStr: string) => {
                                        var currentDateTime = new Date();
                                        var givenDateTime = new Date(dateStr);
                                        var timeDifference = currentDateTime.getTime() - givenDateTime.getTime();
                                        var daysElapsed = Math.floor(timeDifference / (1000 * 3600 * 24));

                                        if (daysElapsed === 0) {
                                            return "Yesterday";
                                        } else if (daysElapsed === -1) {
                                            return "Today";
                                        } else {
                                            return daysElapsed + " days ago";
                                        }
                                    }


                                    return <div key={i} className='flex flex-col gap-8'>
                                        <h2 className="text-3xl font-bold lg:w-[85%] px-3">{title}</h2>

                                        <div className="w-full h-40 sm:h-56 md:h-64 lg:h-80 my-5">
                                            <Image src={urlToImage ?? test} alt='' className='w-full h-full object-cover rounded-lg' width={1000} height={1000} />
                                        </div>

                                        <p className="md:text-xl">{description}</p>

                                        <div className="flex w-full text-xs gap-3 sm:gap-10">

                                            <div className="flex gap-2 items-center">
                                                <Image src={clock} alt='' className='w-12 md:w-14 bg-sky-200 p-2 rounded-full cursor-pointer' />
                                                <span>{timeElapsed(publishedAt)}</span>
                                            </div>
                                        </div>

                                        <a href={url} target='_blank' className="relative inline-block text-lg group w-56 mb-7">
                                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                                <span className="absolute left-0 w-60 h-60 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                                <span className="relative ">Continue reading</span>
                                            </span>
                                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                        </a>
                                    </div>
                                })
                            }
                        </div>
                        {/* pagination -> */}

                        {!isError && <div className="flex items-center gap-2 sm:gap-4 m-auto my-10">
                            <button
                                className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm sm:text-lg duration-200 ease-out"
                                type="button" onClick={() => setPageCount(pageCount == 1 ? pageCount : pageCount - 1)} disabled={pageCount == 1 && true}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                                    aria-hidden="true" className="w-4 h-4 sm:w-7 sm:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                </svg>
                                Previous
                            </button>
                            <div className="flex items-center sm:gap-3">
                                <button
                                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 duration-300 ease-in-out hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <span className="absolute sm:text-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                        {pageCount}
                                    </span>
                                </button>

                                <button
                                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 duration-300 ease-in-out hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    onClick={() => setPageCount(pageCount + 2)}>
                                    <span className="absolute sm:text-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                        {pageCount + 2}
                                    </span>
                                </button>
                            </div>
                            <button
                                className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm sm:text-lg duration-200 ease-out"
                                type="button" onClick={() => setPageCount(pageCount + 1)} disabled={pageCount == 10 && true}>
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                                    aria-hidden="true" className="w-4 h-4 sm:w-7 sm:h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                                </svg>
                            </button>
                        </div>}
                    </div>

                    {/* Trading blogs section -> */}

                    <TradingArticles />
                </div>
            </div>

        </>
    )
}

export default RecentNews
