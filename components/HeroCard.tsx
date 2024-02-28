import { InfoOutlined, PlayCircleOutlineOutlined } from "@mui/icons-material";
import { baseImgUrl } from "@lib/constants";
import { Movie } from "../lib/type";
const HeroCard = ({ trendingMovie }: { trendingMovie: Movie }) => {
  return (
    <>
      <div className="hero">
        <div className="hero-bg">
          <img
            src={`${baseImgUrl}${
              trendingMovie?.backdrop_path || trendingMovie?.poster_path
            }`}
            alt="trending-movie"
            className="hero-bg-image"
          />
          <div className="overlay"></div>
        </div>

        <h1 className="hero-title">
          {trendingMovie?.title || trendingMovie?.name}
        </h1>

        <p className="hero-overview">{trendingMovie?.overview}</p>

        <div className="hero-btns">
          <button className="hero-btn" >
            <PlayCircleOutlineOutlined /> Play Now
          </button>
          <button className="hero-btn" >
            <InfoOutlined /> More Info
          </button>
        </div>
      </div>
   </>
  )
}

export default HeroCard