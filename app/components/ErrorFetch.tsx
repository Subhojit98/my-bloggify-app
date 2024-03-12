import Image from "next/image"
import erorImage from '@/app/assets/icons/computer.png'
const ErrorFetch = () => {
    return (
        <>

            <div className="w-full h-full flex justify-center flex-col items-center gap-3 my-10">
                <Image src={erorImage} alt="error" className="" />
                <h1 className="text-red-500 font-bold text-2xl">Oops! lookes like something is broke !!.</h1>
                <span className="text-gray-500">Please try again later.</span>
            </div>
        </>
    )
}

export default ErrorFetch
