import { useQuery } from "@tanstack/react-query"
import  Axios  from "axios"

const fetchTopHeadLines = async (topic: string) => {
    const res = (await Axios(`https://gnews.io/api/v4/top-headlines?category=${topic}&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&lang=en`)).data
    return res
}

export  const UseTopHeadLines = (topic: string) => {
    return useQuery({
        queryKey: ["top-headlines", topic],
        queryFn: ()=> fetchTopHeadLines(topic),
    })
}


