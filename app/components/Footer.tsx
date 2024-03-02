import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-neutral-900">
                <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                        <a
                            className=" rounded-full bg-indigo-700 p-2 text-white shadow transition hover:bg-[#ffb000] sm:p-3 lg:p-4 hidden md:inline-block"
                            href="#MainContent"
                        >
                            <span className="sr-only">Back to top</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-[#ffb000] lg:justify-start">
                                <a href="#" className="text-3xl sm:text-4xl font-semibold uppercase">
                                    Bloggify
                                </a>
                            </div>

                            <p className="mx-auto mt-6 max-w-md text-center text-sm md:text-base leading-relaxed text-gray-400 lg:text-left">
                                Go beyond the ordinary. Uncover new perspectives and expand your horizons with our blog and podcast. Subscribe to learn, engage, and be inspired.
                            </p>
                        </div>

                        <ul
                            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12 text-sm md:text-base"
                        >
                            <li>
                                <a className="text-gray-700 transition hover:text-gray-300/75" href="#"> About </a>
                            </li>

                            <li>
                                <a className="text-gray-700 transition hover:text-gray-300/75" href="#"> Services </a>
                            </li>

                            <li>
                                <a className="text-gray-700 transition hover:text-gray-300/75" href="#"> Projects </a>
                            </li>

                            <li>
                                <a className="text-gray-700 transition hover:text-gray-300/75" href="#"> Blog </a>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right select-none">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer
