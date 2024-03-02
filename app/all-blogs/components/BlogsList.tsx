import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import podcastImage from '@/app/assets/images/icons8-mic-100.png'
import img5 from '@/app/assets/images/floatImg5.webp'

const BlogsList = () => {
    return (
        <>

            <div className="w-[88%] m-auto mt-20">
                <div className="flex flex-col sm:flex-row sm:gap-9 mt-9 items-center w-full">

                    <span className="rounded-full bg-slate-300">
                        <Image src={podcastImage} alt="" className="w-16 h-16 object-contain p-2 bg-yellow-400 rounded-full" />
                    </span>

                    <div className="flex flex-col p-4 gap-2">
                        <h1 className="text-4xl font-bold text-violet-700 text-cente sm:text-start">Latest Blogs</h1>
                        <p className="text-gray-600 text-lg text-center sm:text-start">Have a look into our Blogs</p>
                    </div>
                </div>

                {/* Search box -> */}

                <div className="flex justify-center items-center mt-7">
                    <div className="space-y-10">
                        <div className="flex items-center p-2 space-x-6 bg-slate-100 rounded-xl shadow-lg hover:shadow-xl transform scale-90 hover:scale-95 transition duration-500">
                            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
                            </div>
                            <div className="hidden sm:flex md:py-3 md:px-4 rounded-lg text-gray-500 font-semibold cursor-pointer ">
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Catagories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">A</SelectItem>
                                        <SelectItem value="dark">B</SelectItem>
                                        <SelectItem value="system">C</SelectItem>
                                        <SelectItem value="C">D</SelectItem>
                                        <SelectItem value="E">E</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>

                            <button className="rounded relative sm:inline-flex hidden group items-center justify-center px-3 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white">
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                <span className="relative mr-4">Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative mt-10 gap-4 sm:gap-10 md:gap-7 xl:gap-8">

                    <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
                        <Image className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src={img5} alt="blog" />
                        <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
                        <div className="py-1 px-6">
                            <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                            <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                            <div className="flex flex-wrap text-sm text-gray-500">
                                <span className="mr-1">Oct 30, 2022</span>
                                <span className="">· 9 min read</span>
                            </div>
                            <div className="mt-1 ">
                                <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    3.5K
                                </span>
                            </div>
                        </div>
                    </article>

                    <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
                        <Image className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src={img5} alt="blog" />
                        <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
                        <div className="py-1 px-6">
                            <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                            <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                            <div className="flex flex-wrap text-sm text-gray-500">
                                <span className="mr-1">Oct 30, 2022</span>
                                <span className="">· 9 min read</span>
                            </div>
                            <div className="mt-1">
                                <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    3.5K
                                </span>
                            </div>
                        </div>
                    </article>

                    <article className="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
                        <Image className="w-full transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-36 lg:h-48" src={img5} alt="blog" />
                        <h2 className="title-font inline-block cursor-pointer px-6 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-orange-600 hover:font-bold">Cities</h2>
                        <div className="py-1 px-6">
                            <h1 className="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">How to get around in New York</h1>
                            <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat iure.</p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                            <div className="flex flex-wrap text-sm text-gray-500">
                                <span className="mr-1">Oct 30, 2022</span>
                                <span className="">· 9 min read</span>
                            </div>
                            <div className="mt-1">
                                <span className="mr-3 ml-auto inline-flex items-center py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    3.5K
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="relative isolate pt-14 -z-10">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] clippathDesign"></div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 sm:gap-4 mt-14 mb-5 ">

                    <button
                        className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm sm:text-lg duration-200 ease-out"
                        type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4 sm:w-7 sm:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                        </svg>
                        Previous
                    </button>
                    <div className="flex items-center sm:gap-3">
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 duration-300 ease-in-out hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute sm:text-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                1
                            </span>
                        </button>
                        <button
                            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 duration-300 ease-in-out hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            <span className="absolute sm:text-lg transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                2
                            </span>
                        </button>

                    </div>
                    <button
                        className="flex items-center gap-2 px-2 sm:px-6 py-3 font-sans font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm sm:text-lg duration-200 ease-out"
                        type="button">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                            aria-hidden="true" className="w-4 h-4 sm:w-7 sm:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}

export default BlogsList
