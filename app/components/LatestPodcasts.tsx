import Image from "next/image"
import podcastImage from '@/app/assets/images/icons8-mic-100.png'
import test from '@/app/assets/images/bgBanner.webp'
import playIcon from '@/app/assets/icons/play-circle.svg'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"

const LatestPodcasts = () => {
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
                        </div>
                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative mt-7 gap-4 sm:gap-10 md:gap-7 xl:gap-5">
                        <Card className="shadow-[5px_5px_0px_0px_rgba(109,40,217)] border border-black" >
                            <CardHeader>
                                <div
                                    className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <Image
                                        src={test}
                                        alt="card-image"
                                        className="" />

                                    <div className="absolute w-16 h-16 rounded-full p-3 bg-white opacity-95 hover:opacity-85 duration-200 cursor-pointer hover:scale-110 ease-in-out top-[38%] left-[38%] ">
                                        <Image
                                            src={playIcon}
                                            alt="card-image"
                                            className="w-full h-full" />
                                    </div>
                                </div>

                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">Card Content about  UI/UX Review </p>
                            </CardContent>
                            <CardFooter>
                                <p className="font-light">Card Footer</p>
                            </CardFooter>
                        </Card>

                        <Card className="shadow-[5px_5px_0px_0px_rgba(109,40,217)]" >
                            <CardHeader>
                                <div
                                    className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <Image
                                        src={test}
                                        alt="card-image"
                                        className="" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">Card Content about  UI/UX Review </p>
                            </CardContent>
                            <CardFooter>
                                <p className="">Card Footer</p>
                            </CardFooter>
                        </Card>
                        <Card className="shadow-[5px_5px_0px_0px_rgba(109,40,217)]" >
                            <CardHeader>
                                <div
                                    className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                    <Image
                                        src={test}
                                        alt="card-image"
                                        className="" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content about  UI/UX Review </p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>

                        <Card className="shadow-[5px_5px_0px_0px_rgba(109,40,217)] relative">
                            <div className="w-full h-full blur-md opacity-90">
                                <CardHeader>
                                    <div
                                        className="relative  mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                                        <Image
                                            src={test}
                                            alt="card-imag"
                                            className="" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content about  UI/UX Review </p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </div>
                            <button className="inline-block px-4 py-2 font-medium group absolute top-1/2 left-[30%] opacity-90">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">S{'ee more ->'}</span>
                            </button>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestPodcasts


