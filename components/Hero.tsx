import { fetchTrending } from "../actions/movieData"
import HeroCard from "./HeroCard"

const Hero = async () => {
  const trending = await fetchTrending()
  const randonNumber = Math.floor(Math.random() * trending.length)
  const trendingMovie = trending[randonNumber]
  // not using this as a client component as data is beng fethced here
  return (
    <div>
      <HeroCard trendingMovie={trendingMovie}/>
    </div>
  )
}

export default Hero