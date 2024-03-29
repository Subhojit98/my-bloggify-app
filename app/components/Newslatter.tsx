import React from 'react'
import startImage from '@/app/assets/images/star-circle-medium-right.png'
import fileBackground from '@/app/assets/images/shape-background.png'
import Image from 'next/image'
const Newslatter = () => {
    return (
        <>
            <section className="relative py-20 md:py-24 overflow-hidden" id='subscribe-section'>
                <Image className="absolute top-0 right-0 lg:w-125 -mr-40 md:-mr-24 lg:-mr-0 z-10" src={startImage} alt="" />
                <div className="container px-4 mx-auto">
                    <div className="relative max-w-7xl pt-32 pb-24 md:pt-24 px-6 md:px-16 mx-auto">
                        <Image className="absolute top-0 left-0 w-full h-full" src={fileBackground} alt="" />
                        <div className="relative z-10 flex flex-wrap -mx-4 items-end">
                            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                                <div className="max-w-md">
                                    <h4 className="font-heading text-4xl sm:text-5xl newsletter font-semibold mb-8 md:mb-16 uppercase">Sign up for our newsletter</h4>
                                    <div className="md:flex">
                                        <div className="mb-6 md:mb-0 md:mr-3 pt-2 text-gray-600">
                                            <svg width="84" height="10" viewBox="0 0 84 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4.5C0.585786 4.5 0.25 4.83579 0.25 5.25C0.25 5.66421 0.585786 6 1 6L1 4.5ZM84 5.25001L76.5 0.919879L76.5 9.58013L84 5.25001ZM1 6L77.25 6.00001L77.25 4.50001L1 4.5L1 6Z" fill="#1E2238"></path>
                                            </svg>
                                        </div>
                                        <div className="max-w-xs">
                                            <p className="text-lg font-semibold text-gray-400">Stay in the loop with everything you need to know.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-4">
                                <div className="max-w-lg lg:ml-auto">
                                    <div className="sm:flex mb-2 items-center">

                                        <input className="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="bloggify@.dev" />

                                        <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-neutral-800 bg-[#FFB000] rounded-md overflow-hidden shadow-[0_20px_50px_rgba(255,176,0,_1.3)] transition duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_1.3)]"
                                            type="submit">
                                            <div className="absolute top-0 right-full w-full h-full bg-indigo-700 group transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                            <div className="relative flex items-center justify-center">
                                                <span className="mr-4 group-hover:text-white transition duration-500">Subscribe</span>
                                                <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <span className="block text-xs font-semibold text-gray-400">
                                        <span>We care about your data in our</span>
                                        <a className="inline-block text-indigo-800 ml-2" href="#">privacy policy</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newslatter
