
import {  useQuery } from '@tanstack/react-query'
import Axios from 'axios'
const APIKEY = process.env.NEXT_PUBLIC_NEWS_API_KEY

const selectPastdate = () : string =>{
const currentDate = new Date()
// ? subtracting 5 from the current date to get the date 5 days ago ->
const targetDateToGet = currentDate.getDate() - 5
currentDate.setDate(targetDateToGet)

const year = currentDate.getUTCFullYear()

// ? adding 1 for the month because getUTCMonth() returns 0-11 ->
const month = currentDate.getUTCMonth()+1 
const date = currentDate.getUTCDate()

return `${year}-${month}-${date}`

}

const selectCurrentDate = () : string => {
const todaysDate = new Date()
const year = todaysDate.getUTCFullYear()

// ? adding 1 for the month because getUTCMonth() returns 0-11 ->
const month = todaysDate.getUTCMonth()+1 
const date = todaysDate.getUTCDate()

return `${year}-${month}-${date}`

}
const recentBlogData = async (pageCount: number)=>{

    const result = (await Axios.get(`https://newsapi.org/v2/everything?domains=bbc.com,techcrunch.com,engadget.com&q=recent&from=${selectPastdate()}&to=${selectCurrentDate()}&pageSize=2&page=${pageCount}&language=en&sortBy=popularity&apiKey=${APIKEY}`)).data

    return result
}

export const UsefetchRecentBlogs = (pageCount: number)=>{

    return useQuery({
        queryKey: ['recent-articles',pageCount], 
        queryFn: () => recentBlogData(pageCount)      
})
}
