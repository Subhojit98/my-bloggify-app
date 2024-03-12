"use client"
import Image from "next/image"
import podcastImage from '@/app/assets/images/icons8-mic-100.png'
import fallbackImage from '@/app/assets/images/bgBanner.webp'
import playIcon from '@/app/assets/icons/play-circle.svg'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { UsefetchLatestPodcasts } from "../hooks/podcast/UsefetchLatestPodcasts"
import Loading from "./Loading"
import ErrorFetch from "./ErrorFetch"

const LatestPodcasts = () => {
    const { data: podcastData, isError, isLoading } = UsefetchLatestPodcasts()
    return (
        <>

            <div className="mt-20">
                <div className="w-[85%] m-auto">
                    <div className="flex flex-col sm:flex  mt-9 items-center sm:items-start w-full">
                        <span className="rounded-full bg-slate-100">
                            <Image src={podcastImage} alt="" className="w-16 h-16 object-contain p-2 bg-slate-100 rounded-full" />
                        </span>

                        <div className=" flex flex-col items-center sm:items-start p-4">
                            <h1 className="text-3xl font-bold text-violet-700 sm:text-start text-center">Latest Podcast</h1>
                            <p className="text-gray-400  sm:text-start text-center">Get started on latest episodes</p>
                            {podcastData?.query && <span className="text-xl font-semibold mt-2">On: {podcastData?.query.split('+').join(" ")}</span>}
                        </div>
                    </div>

                    {isLoading && <Loading />}
                    {isError && <ErrorFetch />}
                    {<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative mt-7 gap-4 sm:gap-10 md:gap-7 xl:gap-5" id="latest-podcast-section">
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
                            })
                        }
                    </div>}
                </div>
            </div>
        </>
    )
}

export default LatestPodcasts


