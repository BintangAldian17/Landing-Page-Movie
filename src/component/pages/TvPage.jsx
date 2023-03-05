import { useInfiniteQuery, useQuery } from "react-query";
import { getPopularTv, getGenresMovie } from "../../hooks/useMovieData";
import { LoadingPage } from "./LoadingPage";
import { useState } from "react";

import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useGetGenresName } from "../../utils/useGetGenreName";

export const TvPage = () => {
  const [category, setCategory] = useState("top_rated");
  const {
    data: popularTv,
    isError: isErrorPopularTv,
    error: errorPopularTv,
    isLoading: isLoadingPopularTv,
    hasNextPage: hasNextPagePopularTv,
    fetchNextPage: fetchNextPagePopularTv,
    isFetching: isFetchingPopularTv,
  } = useInfiniteQuery(["popular-tv"], () => getPopularTv({ mediaCategory: category }), {
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.page < lastPage.data.total_pages) return lastPage.data.page + 1;
      return false;
    },
  });
  const { data: allGenresTv } = useQuery(["genre-tv"], ({}) => getGenresMovie, {
    refetchOnWindowFocus: false,
    staleTime: 180 * 60 * 1000,
  });

  if (isLoadingPopularTv) {
    return <LoadingPage />;
  }

  if (isErrorPopularTv) {
    return <h2>{errorPopularTv.status_message}</h2>;
  }

  return (
    <div className=" w-full h-full bg-black text-white">
      <div className=" w-full h-screen relative">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          className=" w-full h-screen absolute">
          {popularTv &&
            popularTv?.pages.length &&
            popularTv?.pages[0].data.results.map((group, i) => {
              const oViewSlice = group.overview.slice(0, 250);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const genresTv = useGetGenresName(allGenresTv?.data?.genres, group.genre_ids) ?? [];
              return (
                <SwiperSlide className=" w-full h-screen" key={i}>
                  <div className=" w-full h-screen bg-gradient-to-r from-black to-transparent absolute z-50">
                    <div className=" w-full h-screen bg-gradient-to-t from-black via-transparent to-transparent absolute z-50 pl-36">
                      <div className=" h-screen max-w-[700px] flex flex-col justify-center text-white gap-y-4">
                        <div className=" flex items-center gap-x-4">
                          <AiFillStar className=" w-7 h-7 text-yellow-400" />
                          <span className=" text-2xl">{group.vote_average}</span>
                        </div>
                        <div className=" flex gap-x-3">
                          {!genresTv.length ? (
                            <span className="h-10 flex justify-center items-center px-5 rounded-full bg-red-700">
                              Action
                            </span>
                          ) : (
                            genresTv.map((el) => {
                              return (
                                <span className="h-10 flex justify-center items-center px-5 rounded-full bg-red-700">
                                  {el.name}
                                </span>
                              );
                            })
                          )}
                        </div>
                        <h1 className="text-[70px] leading-[90px] font-bold">{group.name}</h1>
                        <p>{oViewSlice}</p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original${group.backdrop_path}`}
                    alt={group.name}
                    className=" h-auto w-full"
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className=" flex flex-col  px-[70px]">
        <div className=" flex justify-between mb-16 items-center">
          <h1 className=" text-2xl font-bold border-b-4 border-red-700">TV SERIES</h1>
          <div className=" text-white font-semibold">
            <button className=" bg-red-700  w-32 h-12 rounded-lg">Popular</button>
            <button className=" bg-black  w-32 h-12 rounded-lg">Top Rated</button>
          </div>
        </div>
        <div className=" grid grid-cols-4 gap-2">
          {popularTv?.pages.map((page) =>
            page.data.results.map((tvPopular) => {
              return (
                <div className="relative  " key={tvPopular.id}>
                  <div className=" absolute w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${tvPopular.poster_path}`}
                    alt={tvPopular.original_name}
                    className=""
                  />
                </div>
              );
            })
          )}
        </div>
        <div className=" flex justify-center items-center my-6">
          {hasNextPagePopularTv && (
            <button
              className=" text-white py-2 px-6 bg-red-700 rounded-lg hover:bg-opacity-70"
              disabled={!hasNextPagePopularTv}
              onClick={fetchNextPagePopularTv}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
