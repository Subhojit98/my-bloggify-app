"use client"
import Image from "next/image"
import micImage from '@/app/assets/images/icons8-microphone-100.png'
import notesImage from '@/app/assets/images/icons8-notes-100.png'
import laptopsImage from '@/app/assets/images/icons8-laptop-100.png'
import { Roboto_Mono } from "next/font/google"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"

const robotoMono = Roboto_Mono({ subsets: ["latin"] })
const Hero = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    useEffect(() => {
        const openDialogTime = setTimeout(() => {
            setIsDialogOpen(true)

        }, 3000)

        return () => {
            clearTimeout(openDialogTime)
        }
    }, [])


    return (
        <>
            <section className="mt-24  hero-section-pattern relative">
                {/* for Alert -> */}
                <AlertDialog open={isDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-amber-500">Attention Please !!</AlertDialogTitle>
                            <AlertDialogDescription>
                                This Application is build for testing purpose only. and Dont have the access to the full news content. Also the articles count can be shown is 10 due to the limitation of the API 🙏🏼.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Yep! I understand.</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

                {/* Hero starts -> */}
                <div className="flex justify-between">
                    <Image src={micImage} alt="mic image" className=" md:mx-10 lg:w-32" />
                </div>
                <Image src={laptopsImage} alt="mic image" className=" md:mx-10 lg:w-32 absolute right-0" />
                <div className="w-full h-full flex justify-center flex-col items-center my-12 sm:mt-16 md:mt-20 gap-10 md:gap-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl hero-text leading-tight sm:leading-snug text-center font-bold">News & upcoming events are waiting for you.</h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl  text-center p-1 font-light text-black lg:w-1/2 md:leading-relaxed lg:leading-loose" style={robotoMono.style}>Increase your knowledge by reading new things and I will share whatever I know for you, as long as I enjoy it.</p>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 mb-5 md:flex-row">

                    <button className="relative inline-flex items-center px-10 py-3 overflow-hidden bg-indigo-600 text-lg font-medium text-white border-2 border-indigo-600 rounded-full  group hover:bg-indigo-600 hover:text-indigo-600 shadow-[0_20px_50px_rgba(8,_112,_184,_1.3)]"
                        onClick={() => {
                            const LatestArticleSection = document.getElementById('latest-acticle-section')
                            LatestArticleSection?.scrollIntoView({ behavior: 'smooth' })
                        }}>
                        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative font-semibold text-neutral-800">Read more</span>
                    </button>


                    <button className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#FFB000]  rounded-full group bg-slate-50 md:bg-[#FFB000] shadow-[0_20px_50px_rgba(255,176,0,_1.3)]"
                        onClick={() => {
                            const LatestPodcastsSection = document.getElementById('latest-podcast-section')
                            LatestPodcastsSection?.scrollIntoView({ behavior: 'smooth' })
                        }}>

                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#FFB000] md:bg-white  group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="#FFB000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            <span className="text-lg ml-2 text-slate-100 md:text-neutral-800 font-semibold">let&apos;s go</span>
                        </span>
                        <span className="absolute flex items-center text-lg font-semibold justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease text-neutral-800">Listen podcast</span>
                        <span className="relative invisible">Button Text</span>
                    </button>

                </div>
                <div className="flex justify-end md:mx-10">
                    <Image src={notesImage} alt="notes image" className="lg:w-32" />
                </div>



            </section>
        </>
    )
}

export default Hero
