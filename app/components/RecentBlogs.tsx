import Image from 'next/image'
import test from '@/app/assets/images/bgBanner.webp'
import clock from '@/app/assets/icons/clock.svg'
import share from '@/app/assets/icons/location-arrow.svg'
import like from '@/app/assets/icons/heart.svg'

import blogsImage from '@/app/assets/images/icons8-task-100.png'

const RecentBlogs = () => {

    return (
        <>
            <div className="w-[85%] m-auto mt-24">
                <div className="flex flex-col sm:flex  mt-9 items-center sm:items-start w-full">
                    <span className="rounded-full bg-slate-100">
                        <Image src={blogsImage} alt="" className="w-16 h-16 object-contain p-2 bg-slate-100 rounded-full" />
                    </span>

                    <div className="flex flex-col p-4">
                        <h1 className="text-3xl font-bold text-[#ffb000] sm:text-start text-center">Recent Blogs</h1>
                        <p className="text-gray-500 mt-2 sm:text-start text-center">Take a look to our latest blogs</p>
                    </div>
                </div>

                {/* Recent Blogs -> */}
                <div className="h-full w-full mt-5 flex gap-6">

                    <div className="w-full justify-self-start flex flex-col gap-6 m-auto">
                        <div className='flex flex-col items-center md:items-start gap-10 h-full'>
                            <h2 className="text-3xl font-bold lg:w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

                            <div className="w-full h-40 sm:h-56 md:h-64 lg:h-80 my-5">
                                <Image src={test} alt='' className='w-full h-full object-cover rounded-lg' />
                            </div>

                            <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati non deleniti eos, maxime doloribus ipsum voluptas eveniet, quis alias amet! Veritatis vel distinctio non, dicta eum architecto dignissimos sint et, id necessitatibus inventore eaque temporibus eos quibusdam repellendus similique quas ducimus harum quam. Cumque consequatur iste excepturi harum ipsam?</p>

                            <div className="flex w-full text-xs gap-3 sm:gap-10">

                                <div className="flex gap-2 items-center">
                                    <Image src={clock} alt='' className='w-12 md:w-14 bg-sky-200 p-2 rounded-full cursor-pointer' />
                                    <span>5 mins ago</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={share} alt='' className='w-12 md:w-14 bg-pink-200 p-2 rounded-full cursor-pointer' />
                                    <span>share</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={like} alt='' className='w-12 md:w-14 bg-violet-200 p-2 rounded-full cursor-pointer' />
                                    <span>12 likes</span>
                                </div>
                            </div>

                            <button className="relative inline-block text-lg group w-56 mb-7">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="absolute left-0 w-60 h-60 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                    <span className="relative ">{`Continue reading ->`}</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </button>


                            <h2 className="text-3xl font-bold lg:w-[85%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>

                            <div className="w-full h-40 sm:h-56 md:h-64 lg:h-80 my-5">
                                <Image src={test} alt='' className='w-full h-full object-cover rounded-lg' />
                            </div>

                            <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati non deleniti eos, maxime doloribus ipsum voluptas eveniet, quis alias amet! Veritatis vel distinctio non, dicta eum architecto dignissimos sint et, id necessitatibus inventore eaque temporibus eos quibusdam repellendus similique quas ducimus harum quam. Cumque consequatur iste excepturi harum ipsam?</p>

                            <div className="flex w-full text-xs gap-3 sm:gap-10">

                                <div className="flex gap-2 items-center">
                                    <Image src={clock} alt='' className='w-12 md:w-14 bg-sky-200 p-2 rounded-full cursor-pointer' />
                                    <span>5 mins ago</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={share} alt='' className='w-12 md:w-14 bg-pink-200 p-2 rounded-full cursor-pointer' />
                                    <span>share</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <Image src={like} alt='' className='w-12 md:w-14 bg-violet-200 p-2 rounded-full cursor-pointer' />
                                    <span>12 likes</span>
                                </div>
                            </div>

                            <button className="relative inline-block text-lg group w-56 mb-7">
                                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                    <span className="absolute left-0 w-60 h-60 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                    <span className="relative ">{`Continue reading ->`}</span>
                                </span>
                                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                            </button>
                        </div>
                        {/* pagination -> */}

                        <div className="flex items-center gap-2 sm:gap-4 m-auto my-10">
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

                    {/* Trading blogs section -> */}

                    <div className="w-[40%] hidden lg:block ">

                        <h3 className="font-bold text-xl">Trading Blogs</h3>

                        <div className={` mt-10 relative`}>
                            <Image src={test} alt="" className='w-full object-cover rounded-md' />
                            <div className="text-white px-3 top-16 left-7 absolute">
                                <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p className="text-xs mt-3">5 min ago </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-14">

                            <div className="flex gap-5 w-full h-24">
                                <Image src={test} alt="" className='w-24 rounded-md' />
                                <div className="">
                                    <h4 className="font-medium">Lorem ipsum dolor, sit amet consectetur</h4>
                                    <span className="text-xs mt-2">5 minutes ago</span>
                                </div>

                            </div>
                            <div className="flex gap-5 w-full h-24">
                                <Image src={test} alt="" className='w-24 rounded-md' />
                                <div className="">
                                    <h4 className="font-medium">Lorem ipsum dolor, sit amet consectetur</h4>
                                    <span className="text-xs mt-2">5 minutes ago</span>
                                </div>

                            </div>
                            <div className="flex gap-5 w-full h-24">
                                <Image src={test} alt="" className='w-24 rounded-md' />
                                <div className="">
                                    <h4 className="font-medium">Lorem ipsum dolor, sit amet consectetur</h4>
                                    <span className="text-xs mt-2">5 minutes ago</span>
                                </div>

                            </div>
                            <div className="flex gap-5 w-full h-24">
                                <Image src={test} alt="" className='w-24 rounded-md' />
                                <div className="">
                                    <h4 className="font-medium">Lorem ipsum dolor, sit amet consectetur</h4>
                                    <span className="text-xs mt-2">5 minutes ago</span>
                                </div>

                            </div>
                            <div className="flex gap-5 w-full h-24">
                                <Image src={test} alt="" className='w-24 rounded-md' />
                                <div className="">
                                    <h4 className="font-medium">Lorem ipsum dolor, sit amet consectetur</h4>
                                    <span className="text-xs mt-2">5 minutes ago</span>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default RecentBlogs
