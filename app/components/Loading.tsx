import Image from "next/image"
import spinner from '@/app/assets/images/Animation - 1709757215832.gif'

const Loading = () => {
    return (
        <>
            <Image src={spinner} alt="loading spinner" className="w-20 h-20 m-auto" />
            <h1 className="text-xl mt-3 text-center font-semibold">Just a minute almost there.</h1>
        </>
    )
}

export default Loading
