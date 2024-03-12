import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const defaultTerms = [
    "Cooking and Food Culture",
    "Travel and Adventure",
    "Literature and Books",
    "Music and Music History",
    "Art and Creativity",
    "Technology and Gaming",
    "Self-Help and Motivation",
    "Environment and Sustainability",
    "Parenting and Family Dynamics",
    "Sports and Athlete Stories"
];


const randomTerm = ()=>  defaultTerms[Math.floor(Math.random() * defaultTerms.length)]

const fetchPodcastData= async (query: string ,pageCount: number) => {

  const options = {
  method: 'GET',
  url: "listen-api.listennotes.com",
  params: {
    q: query === "" ?  randomTerm() : query,
    type: 'podcasts',
    offset: pageCount,
    limit: '7'
  },
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_PODCAST_API_KEY,
    'X-RapidAPI-Host': "spotify23.p.rapidapi.com",
  }
}
  const res = (await Axios.get("https://spotify23.p.rapidapi.com/search/",options)).data
  return res
}



export const UseSearchPodcast = (query: string, pageCount: number)=>{

return useQuery({queryKey:['searchedPodcasts',query,pageCount],
queryFn: ()=> fetchPodcastData(query,pageCount)})
}

