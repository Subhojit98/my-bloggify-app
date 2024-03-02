
const Navbar = () => {
    return (
        <>
            <nav className="relative px-4 py-5 flex justify-between items-center bg-neutral-800 mt-5 w-11/12 m-auto rounded-lg">
                <a className="text-2xl font-bold leading-none uppercase text-white">
                    bloggify
                </a>
                {/* Hamburder menu -> */}
                <button className="group h-10 w-10 rounded-lg md:hidden">
                    <div className="grid justify-items-center gap-1.5">
                        <span className="h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5 duration-300" />
                        <span className="h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition duration-300" />
                        <span className="h-1 w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2.5 duration-300" />
                    </div>
                </button>

                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li><a className="text-lg text-blue-600 font-bold" href="#">Home</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-gray-300" href="#">Podcasts</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Blogs</a></li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>

                    <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
