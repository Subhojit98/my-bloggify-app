import { useQuery } from "@tanstack/react-query";
import  Axios  from "axios";

 const fetchSearchedNews = async (searchQuery: string) => {
        const res = (await Axios(`https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&lang=en`)).data
        return res
    }

export const UseSearchNews = (searchQuery: string) => {
    return useQuery({
        queryKey: ['searchedNews', searchQuery],
        queryFn: () => fetchSearchedNews(searchQuery)
    })
}