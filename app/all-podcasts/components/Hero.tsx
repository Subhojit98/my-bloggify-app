"use client"
import Image from "next/image"
import micImage from '@/app/assets/images/pngwing.com.png'
import sharesIcon from '@/app/assets/icons/external-link-alt.svg'
import micIcon from '@/app/assets/icons/microphone-white.svg'
import headphoneIcon from '@/app/assets/icons/headphones-alt.svg'
import micIconBlack from '@/app/assets/icons/microphone.svg'
import playIcon from '@/app/assets/icons/play-circle2.svg'
import { Rubik, Roboto_Mono } from "next/font/google"

const rubik = Rubik({ subsets: ["latin"] })
const robotoMono = Roboto_Mono({ subsets: ["latin"] })
const Hero = () => {
    return (
        <>
            <div className=" h-full lg:h-screen meshBackground flex justify-center items-center p-7">

                <div className="w-[95%] h-[90%] flex relative mt-20 sm:mt-10">
                    <div className="w-full h-full flex flex-col gap-5">
                        <h1 className="text-4xl md:text-5xl md:mt-10 p-2 sm:p-4 leading-tight font-bold z-20"> Share your voice and your message with a global audience.</h1>

                        <span className="p-2 sm:p-4 text-sm font-medium z-20" style={robotoMono.style}>it is a powerful tool for education and personal growth. It allows me to share my knowledge and experiences with others.</span>

                        <div className="mx-2 flex flex-col md:flex-row gap-5 md:gap-10">

                            <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3.5  px-10 text-sm font-semibold text-neutral-800 bg-[#FFB000] overflow-hidden shadow-[0_20px_50px_rgba(255,176,0,_1.3)] transition duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_1.3)]"
                                onClick={() => {
                                    const podcastSection = document.getElementById('podcast-section')
                                    podcastSection?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                <div className="absolute top-0 right-full w-full h-full bg-indigo-700 group transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <div className="relative flex items-center justify-center">
                                    <span className="mr-2 group-hover:text-white transition duration-500 font-semibold">Listen Now
                                    </span>
                                    <Image src={micIconBlack} alt="" className="w-5" />

                                </div>
                            </button>

                            <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3.5  px-10 text-sm font-semibold text-white bg-indigo-700 overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_1.3)] transition duration-500 hover:shadow-[0_20px_50px_rgba(255,176,0,_1.3)]"
                                onClick={() => {
                                    const subscribeSection = document.getElementById('subscribe-section')
                                    subscribeSection?.scrollIntoView({ behavior: 'smooth' })
                                }}>
                                <div className="absolute top-0 right-full w-full h-full bg-[#FFB000] group transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                <div className="relative flex items-center justify-center">
                                    <span className="mr-4 group-hover:text-white transition duration-500 font-semibold">Subscribe</span>
                                    <Image src={playIcon} alt="" className="w-5" />
                                </div>
                            </button>
                        </div>

                        <div className="flex mt-5 justify-between md:justify-start md:gap-24 text-white sm:mx-5 mb-10">
                            <div>
                                <Image src={sharesIcon} alt="share icon" className="w-7 h-7 sm:w-10 sm:h-10" />
                                <span className="font-bold md:text-xl text-gray-900">1K+</span>
                                <br />
                                <span className="text-xs sm:text-sm text-center font-medium">Shared  <br />Podcasts</span>
                            </div>
                            <div>
                                <Image src={micIcon} alt="mic icon" className="w-7 h-7 sm:w-10  sm:h-10" />
                                <span className="font-bold md:text-xl text-gray-900">30K+</span>
                                <br />
                                <span className="text-xs sm:text-sm text-center font-medium">Recorded <br />Podcasts</span>
                            </div>
                            <div>
                                <Image src={headphoneIcon} alt="headphone icon" className="w-7 h-7 sm:w-10  sm:h-10" />
                                <span className="font-bold md:text-xl text-gray-900">50K+</span>
                                <br />
                                <span className="text-xs sm:text-sm text-center font-medium">Daily  <br />Listeners</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full hidden md:block">
                        <Image src={micImage} alt="micImage" className="w-full h-full object-contain" />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero