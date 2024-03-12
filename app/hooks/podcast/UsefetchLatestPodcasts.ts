import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const defaultTerms = [
    "True Crime Investigations",
    "Mental Health and Wellness",
    "Politics and Current Events",
    "Science and Technology",
    "Comedy and Entertainment",
    "History and Historical Figures",
    "True Stories and Personal Narratives",
    "Business and Entrepreneurship",
    "Health and Fitness",
    "Paranormal and Supernatural"
]

const randomTerm = ()=>  defaultTerms[Math.floor(Math.random() * defaultTerms.length)]
const fetchPodcastData= async () => {

  const options = {
  method: 'GET',
  url: "listen-api.listennotes.com",
  params: {
    q: randomTerm(),
    type: 'podcasts',
    offset: '1',
    limit: '4'
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_PODCAST_API_KEY,
    'X-RapidAPI-Host': "spotify23.p.rapidapi.com"
  }

}
  const res = (await Axios.get("https://spotify23.p.rapidapi.com/search/",options)).data
  return res
}




export const UsefetchLatestPodcasts = ()=>{

  return useQuery({queryKey:['latestPodcasts'],
queryFn: ()=> fetchPodcastData()})
}

