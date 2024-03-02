import Hero from "./components/Hero";
import LatestPodcasts from "./components/LatestPodcasts";
import Newslatter from "./components/Newslatter";
import RecentBlogs from "./components/RecentBlogs";


export default function Home() {
  return (
    <>
      <Hero />
      <LatestPodcasts />
      <RecentBlogs />
      <Newslatter />
    </>
  )
}
