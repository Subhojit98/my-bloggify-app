"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import podcastImage from '@/app/assets/images/icons8-mic-100.png'
import fallbackImage from '@/app/assets/images/bgBanner.webp'
import empty from '@/app/assets/images/icons8-empty-48.png'
import playIcon from '@/app/assets/icons/play-circle.svg'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { UseSearchPodcast } from "@/app/hooks/podcast/UseSearchPodcast"
import React, { KeyboardEvent, useState } from "react"
import Loading from "@/app/components/Loading"
import ErrorFetch from "@/app/components/ErrorFetch"

const PodcastList = () => {
    const [pageCount, setPageCount] = useState(1)
    const [query, setQuery] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = () => {
        setSearchQuery(query)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setSearchQuery(query)
        }
    }

    const { data: podcastData, isLoading, isError } = UseSearchPodcast(searchQuery, pageCount)
    return (
        <>
            <div className="my-20 magic-pattern-plus py-6">

                <div className="w-[88%] m-auto ">
                    <div className="flex flex-col sm:flex-row sm:gap-9 mt-9 items-center w-full">

                        <span className="rounded-full bg-slate-300">
                            <Image src={podcastImage} alt="" className="w-16 h-16 object-contain p-2 bg-yellow-400 rounded-full" />
                        </span>

                        <div className="flex flex-col p-4 gap-2">
                            <h1 className="text-4xl font-bold text-violet-700 text-cente sm:text-start">Latest Podcast</h1>
                            <p className="text-gray-600 text-lg text-center sm:text-start">Have a look into our podcats</p>
                        </div>
                    </div>

                    {isError && <ErrorFetch />}
                    {/* Search box -> */}

                    <div className="flex justify-center items-center mt-7 mb-2">
                        <div className="space-y-10">
                            <div className="flex items-center p-2 space-x-6 bg-slate-100 rounded-xl shadow-lg hover:shadow-xl transform scale-90 hover:scale-95 transition duration-500">
                                <button className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input className="bg-gray-100 outline-none" value={query} type="text" placeholder="Article name or keyword..." onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyPress} />
                                </button>
                                <div className="hidden sm:flex md:py-3 md:px-4 rounded-lg text-gray-500 font-semibold cursor-pointer ">
                                </div>

                                <button className="rounded relative sm:inline-flex hidden group items-center justify-center px-3 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
                                    onClick={handleSearch}>
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                    <span className="relative mr-4">Search</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {
                        isLoading && <Loading />
                    }

                    {
                        podcastData?.podcasts.items.length === 0 &&
                        <div className="flex flex-col items-center mt-16 duration-200 transition gap-5">
                            <Image src={empty} alt="empty search" />
                            <p className="text-2xl text-gray-600">No podcast found as {query}</p>
                        </div>
                    }
                    {podcastData?.podcasts.items.length !== 0 && searchQuery && <span className="text-lg font-bold">Results by {searchQuery}</span>}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative mt-10 gap-4 sm:gap-10 md:gap-7 xl:gap-8" id="podcast-section">
                        {
                            podcastData?.podcasts.items.map((podcast: any, i: number) => {
                                const { uri, name, coverArt, publisher } = podcast.data
                                const image = coverArt.sources[2] ?? coverArt.sources[1]

                                return <Card key={i} className="shadow-[5px_5px_0px_0px_rgba(109,40,217)] border border-black" >
                                    <CardHeader>
                                        <div
                                            className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                            <Image
                                                src={image.url ?? fallbackImage}
                                                alt="card-image"
                                                className="w-full object-contain" height={100} width={100} />

                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <a href={uri} target="_blank" className="absolute w-16 h-16 rounded-full p-3 bg-white opacity-95 hover:opacity-85 duration-200 cursor-pointer hover:scale-110 ease-in-out top-[38%] left-[38%]">
                                                        <Image
                                                            src={playIcon}
                                                            alt="play button icon"
                                                            className="w-full h-full" />
                                                    </a>
                                                </HoverCardTrigger>
                                                <HoverCardContent className="font-semibold">
                                                    We don&apos;t have the access to the podcast audio, so you can only listen to the podcast on <span className="text-green-500">Spotify</span>.
                                                </HoverCardContent>
                                            </HoverCard>

                                        </div>

                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-semibold">{name}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <p className="font-light">by {publisher.name}</p>
                                    </CardFooter>
                                </Card>
                            })}
                    </div>

                    {/* Pagination -> */}
                    {podcastData?.podcasts.items.length !== 0 && <div className="flex items-center justify-center gap-2 sm:gap-4 mt-14 mb-5 ">
                        <button
                            className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm sm:text-lg duration-200 ease-out"
                            type="button" disabled={pageCount === 1 ? true : false}
                            onClick={() => setPageCount(pageCount - 1)}>
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
                            onClick={() => setPageCount(pageCount + 1)}>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                                aria-hidden="true" className="w-4 h-4 sm:w-7 sm:h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                            </svg>
                        </button>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default PodcastList