import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const APIKEY = process.env.NEXT_PUBLIC_NEWS_API_KEY

const fetchAllArticles = async (pageCount: number, query: string) => {

    return (await Axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${APIKEY}&page=${pageCount}&pageSize=8`)).data

}

export const UseSearchArticles = (pageCount: number, query: string) => {
    return useQuery({
        queryKey: ['searched-articles', pageCount, query],
        queryFn: () => fetchAllArticles(pageCount, query)
    })
}