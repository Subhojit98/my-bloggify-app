"use client"
import Image from "next/image"
import playIcon from '@/app/assets/icons/play-circle.svg'
import blogIcon from '@/app/assets/icons/document-layout-center.svg'
import img1 from '@/app/assets/images/floatImg1.webp'
import img2 from '@/app/assets/images/floatImg2.webp'
import img3 from '@/app/assets/images/floatImg3.webp'
import img4 from '@/app/assets/images/floatImg4.webp'
import img5 from '@/app/assets/images/floatImg5.webp'
import { Roboto_Mono } from "next/font/google"

const robotoMono = Roboto_Mono({ subsets: ["latin"] })
const Hero = () => {
    return (
        <>

            <div className="bg-white">

                <div className="relative isolate pt-14 ">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] clippathDesign"></div>
                    </div>

                    <div className="w-full h-full lg:h-screen flex mb-16  grid-lauout-design">

                        <div className="mt-20 px-16">

                            <div className="w-full h-full flex flex-col gap-10 md:gap-5">
                                <h1 className="text-4xl md:text-6xl md:mt-10 p-2 sm:p-4 leading-tight font-bold "> The idea of redemption is always good news, even if it means sacrifice or some difficult times.</h1>

                                <span className="p-2 sm:p-4 text-sm font-medium z-20" style={robotoMono.style}>it is a powerful tool for education and personal growth. It allows me to share my knowledge and experiences with others. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illum?</span>

                                <div className="mx-2 flex flex-col md:flex-row gap-5 md:gap-10">

                                    <button className="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3.5  px-10 text-sm font-semibold text-neutral-800 bg-[#FFB000] overflow-hidden shadow-[0_20px_50px_rgba(255,176,0,_1.3)] transition duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_1.3)]"
                                        onClick={() => {
                                            const articlesSection = document.getElementById('articles-section')
                                            articlesSection?.scrollIntoView({ behavior: 'smooth' })
                                        }}
                                    >
                                        <div className="absolute top-0 right-full w-full h-full bg-indigo-700 group transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <a className="relative flex items-center justify-center">
                                            <span className="mr-2 group-hover:text-white transition duration-500 font-semibold">Explore Now
                                            </span>
                                            <Image src={blogIcon} alt="" className="w-5" />

                                        </a>
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
                            </div>

                        </div>


                        <div className="w-full h-full lg:flex gap-8 px-5 hidden">

                            <div className="w-[33.33%] h-[80%] flex flex-col items-center gap-5 place-self-end floating-div1">
                                <Image src={img1} alt="" className="w-full h-full object-contain" />
                                <Image src={img2} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="w-[33.33%] h-[80%] flex flex-col items-center gap-5 floating-div2">
                                <Image src={img5} alt="" className="w-full h-full object-contain" />
                                <Image src={img4} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="w-[33.33%] h-full flex flex-col floating-div3">
                                <Image src={img3} alt="" className="w-full h-1/2 object-contain m-auto" />
                            </div>

                        </div>
                    </div>

                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] clipPathDesign"></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero
