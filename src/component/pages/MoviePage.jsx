import { useState } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { getPopularMovies, getTopRatedMovies, getGenresMovie } from "../../hooks/useMovieData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, History } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LoadingPage } from "./LoadingPage";
import { useGetGenresName } from "../../utils/useGetGenreName";
import { FaPlay } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";

const MoviePage = () => {
  const [category, setCategory] = useState("popular");
  const [page, setPage] = useState(1);

  const {
    isError: isErrorPopularMovie,
    isLoading: isLoadingPopularMovie,
    error: errorPopularMovie,
    data: popularMovie,
    hasNextPage: hasNextPagePopularMovie,
    fetchNextPage: fetchNextPagePopularMovie,
  } = useInfiniteQuery(["popular-movie"], getPopularMovies, {
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => {
      if (lastPage.data.page < lastPage.data.total_pages) return lastPage.data.page + 1;
      return false;
    },
  });

  const { data: allGenresMovie } = useQuery(["genres-movies"], getGenresMovie, {
    refetchOnWindowFocus: false,
    staleTime: 180 * 60 * 1000, // 3 hours
  });

  if (isLoadingPopularMovie) {
    return <LoadingPage />;
  }

  if (isErrorPopularMovie) {
    return <h2>{errorPopularMovie.status_message}</h2>;
  }

  return (
    <div className=" w-full h-full bg-black text-white">
      <div className="w-full h-full">
        <div className=" w-full h-screen relative">
          <Swiper
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay, History]}
            className=" w-full h-screen absolute">
            {popularMovie &&
              popularMovie?.pages.length &&
              allGenresMovie &&
              popularMovie?.pages[0].data.results.map((group, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const genresMovie = useGetGenresName(allGenresMovie?.data?.genres, group.genre_ids) ?? [];

                return (
                  <SwiperSlide className=" w-full h-screen " key={i}>
                    <div className=" w-full h-screen absolute z-50 bg-gradient-to-t via-transparent from-black to-transparent"></div>
                    <div className=" w-full h-screen absolute z-50 bg-gradient-to-r from-black to-transparent pl-52">
                      <div className=" h-full  max-w-[600px] flex flex-col justify-center gap-y-10">
                        <h1 className=" text-[65px] leading-[80px] font-bold text-white drop-shadow-lg">
                          {group.title}
                        </h1>
                        <div className=" text-white flex items-center gap-x-4">
                          {genresMovie.map((el) => {
                            return (
                              <span className=" h-9 flex justify-center items-center px-4 rounded-full bg-red-600">
                                {el.name}
                              </span>
                            );
                          })}
                        </div>
                        <p className=" text-white drop-shadow-md">{group.overview}</p>
                        <Link to={`/movie/${group.id}`}>
                          <button className=" w-40 h-[45px] bg-red-600 shadow-xl rounded-lg flex justify-center items-center gap-x-3">
                            <FaPlay />
                            <span>Watch Now</span>
                          </button>
                        </Link>
                      </div>
                    </div>
                    <img
                      src={`https://image.tmdb.org/t/p/original${group.backdrop_path}`}
                      alt={group.title}
                      className=" h-auto w-full"
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <div className=" flex flex-col  px-16">
          <div className=" flex justify-between mb-16 items-center">
            <h1 className=" text-3xl font-bold border-b-4 border-red-700">MOVIE</h1>
            <div className=" text-white font-semibold">
              <button
                className={`${category === "popular" && "bg-red-700"} w-32 h-12 rounded-lg`}
                onClick={() => setCategory("popular")}>
                Popular
              </button>
              <button
                className={`${category === "top_rated" && "bg-red-700"} w-32 h-12 rounded-lg`}
                onClick={() => setCategory("top_rated")}>
                Top Rated
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-4 gap-3 ">
            {popularMovie?.pages.map((page) =>
              page.data.results.map((movie) => {
                return (
                  <Link to={`/movie/${movie.id}`}>
                    <div className="relative h-[506px] " key={movie.id}>
                      <div className=" absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className=" h-[506px]"
                      />
                    </div>
                  </Link>
                );
              })
            )}
          </div>
          <div className=" flex justify-center items-center my-6">
            {hasNextPagePopularMovie && (
              <button
                className=" text-white py-2 px-6 bg-red-700 rounded-lg hover:bg-opacity-70"
                disabled={!hasNextPagePopularMovie}
                onClick={fetchNextPagePopularMovie}>
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
