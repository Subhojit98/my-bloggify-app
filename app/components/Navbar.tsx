"use client"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {

    const router = useRouter()
    const lastScrollTop = useRef(0)
    const handleLogoClick = () => {
        window.location.reload()
    }


    useEffect(() => {
        const page = document.body

        const handleScroll = (): void => {
            const currentScroll = window.scrollY

            if (currentScroll <= 0) {
                page.classList.remove("scroll-up")
                page.classList.remove("logo-type1")
                page.classList.remove("logo-type2")
            }


            if (currentScroll >= 200 && !page.classList.contains("logo-type1")) {
                page.classList.add("logo-type1")


            }
            if (currentScroll >= 800 && page.classList.contains("logo-type1")) {
                page.classList.remove("logo-type1")
                page.classList.add("logo-type2")
            }

            if (currentScroll > lastScrollTop.current && !page.classList.contains("scroll-down")) {
                page.classList.add("scroll-down")
                page.classList.remove("scroll-up")
            }
            if (currentScroll < lastScrollTop.current && page.classList.contains("scroll-down")) {
                page.classList.remove("scroll-down")
                page.classList.add("scroll-up")
            }


            lastScrollTop.current = currentScroll
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <>
            <nav className=" px-4 py-3 lg:py-5 flex justify-between items-center bg-neutral-800 w-11/12 rounded-lg z-50 duration-300 ease-in-out top-5 fixed left-0 right-0 mx-auto" id="navigation-bar">
                <div className="text-2xl font-bold leading-none uppercase text-white cursor-pointe logo-type1" onClick={handleLogoClick} id="logo">
                    <span className="">bloggify</span>
                </div>

                {/* Hamburder menu -> */}
                <Sheet>
                    <SheetTrigger>
                        <div className="group h-10 w-10 rounded-lg lg:hidden mt-2">
                            <div className="grid justify-items-center gap-1.5">
                                <span className="h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5 duration-300" />
                                <span className="h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition duration-300" />
                                <span className="h-1 w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2.5 duration-300" />
                            </div>
                        </div>
                    </SheetTrigger>
                    <SheetContent className="hamburder-menu-bg">
                        <nav className="flex justify-center items-center h-full">
                            <ul className="flex flex-col gap-20 text-xl justify-start items-center">
                                <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out h-full w-full" onClick={() => router.push("/")}>Home</li>
                                <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out h-full w-full" onClick={() => router.push("/all-podcasts")}>Podcasts</li>
                                <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out h-full w-full" onClick={() => router.push("/all-blogs")}>Acticle&apos;s</li>
                                <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out h-full w-full" onClick={() => router.push("/contact-us")}>Contact</li>
                            </ul>
                        </nav>

                    </SheetContent>
                </Sheet>


                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out" onClick={() => router.push("/")}>Home</li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>

                    <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out" onClick={() => router.push("/all-podcasts")}>Podcasts</li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                    <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out" onClick={() => router.push("/all-blogs")}>Acticle&apos;s</li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>

                    <li className="font-bold cursor-pointer hover:scale-125 text-gray-400 hover:text-blue-600 duration-300 ease-out" onClick={() => router.push("/contact-us")}>Contact</li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
