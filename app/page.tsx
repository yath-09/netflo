import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { fetchGenreMovies } from "@actions/movieData"
import { Genre } from "../lib/type"
import CategoryList from "@components/CategoryList"
const Home = async() => {
  const genres=await fetchGenreMovies()
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="flex flex-col gap-8 mt-16 pl-10">
        {genres.map((genre: Genre) => (
          <CategoryList key={genre.id} title={genre.name} movies={genre.movies} />
        ))}
      </div>
    </div>
  )
}

export default Home
