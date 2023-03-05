import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { useParams, Link } from "react-router-dom";
import {
  getDetail,
  getDetailCredits,
  getDetailImage,
  getDetailImages,
  getDetailSimilar,
  useDetailPage,
} from "../../hooks/useMovieData";
import { useQuery } from "react-query";
import { LoadingPage } from "./LoadingPage";

import { AiFillStar } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

export const DetailPage = () => {
  const { mediaId } = useParams();
  const {
    isLoading: isLoadingDetail,
    data: dataDetail,
    isError: isErrorDetail,
    error: errorDetail,
    isFetching: isFetchingDetail,
  } = useQuery(["movie-detail", mediaId], () => getDetail({ mediaId }), {
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingDetailCredits,
    data: dataDetailCredits,
    isError: isErrorDetailCredits,
    error: errorDetailCredits,
    isFetching: isFetchingDetailCredits,
  } = useQuery(["movie-detail-credits", mediaId], () => getDetailCredits({ mediaId }), {
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingDetailSimilar,
    data: dataDetailSimilar,
    isError: isErrorDetailSimilar,
    error: errorDetailSimilar,
    isFetching: isFetchingDetailSimiliar,
  } = useQuery(["movie-detail-similar", mediaId], () => getDetailSimilar({ mediaId }), {
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingDetailImages,
    data: dataDetailImages,
    isError: isErrorDetailImages,
    error: errorDetailImages,
    isFetching: isFetchingDetailImages,
  } = useQuery(["movie-detail-images", mediaId], () => getDetailImages({ mediaId }), {
    refetchOnWindowFocus: false,
  });

  if (
    isLoadingDetail ||
    isFetchingDetail ||
    isLoadingDetailCredits ||
    isFetchingDetailCredits ||
    isLoadingDetailImages ||
    isFetchingDetailImages ||
    isLoadingDetailSimilar ||
    isErrorDetailSimilar
  ) {
    return <LoadingPage />;
  }

  return (
    <div className=" w-full h-full ">
      <div className=" w-full h-full  text-white">
        <div className=" w-full h-full">
          <div className=" w-full h-screen absolute">
            <div className=" bg-gradient-to-t from-black via-black to-transparent absolute w-full h-full -z-30"></div>
            <div className=" absolute -z-40 w-full h-screen">
              <img
                src={`https://image.tmdb.org/t/p/original${dataDetail?.data.backdrop_path}`}
                alt={dataDetail?.data.title}
                className="h-screen w-full"
              />
            </div>
          </div>

          <div className=" w-full h-full px-28 pt-56 bg-black">
            <div className=" w-full h-full flex">
              <div className=" w-[42%]">
                <img
                  src={`https://image.tmdb.org/t/p/w500${dataDetail?.data.poster_path}`}
                  alt={dataDetail?.data.title}
                />
              </div>
              <div className=" w-[58%] flex flex-col gap-y-12">
                <h1 className=" text-[60px] font-bold leading-[75px] drop-shadow-xl">{dataDetail?.data.title}</h1>
                <div className=" text-white flex items-center gap-x-4">
                  {dataDetail?.data.genres.map((el) => {
                    return (
                      <span className=" h-9 flex justify-center items-center px-4 rounded-full bg-red-600" key={el.id}>
                        {el.name}
                      </span>
                    );
                  })}
                </div>
                <p className=" drop-shadow-lg">{dataDetail?.data.overview}</p>
                <div>
                  <button className=" w-40 h-[45px] bg-red-600 shadow-xl rounded-lg flex justify-center items-center gap-x-3">
                    <FaPlay />
                    <span>Watch Now</span>
                  </button>
                </div>
                <div>
                  <h1 className=" font-bold text-3xl mb-6">CAST</h1>
                  <div>
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={10}
                      pagination={{
                        clickable: true,
                      }}
                      className=" h-[210px] cursor-grab">
                      <div>
                        {dataDetailCredits?.data.cast.map((cast) => {
                          return cast.profile_path === null ? (
                            ""
                          ) : (
                            <SwiperSlide className="">
                              <img
                                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                                key={cast.id}
                                alt={cast.name}
                                className=""
                              />
                            </SwiperSlide>
                          );
                        })}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full h-full bg-black mt-20 flex flex-col gap-y-32">
              {/* BackDrop Galeri */}
              <div className=" w-full h-screen">
                <h1 className=" text-3xl font-bold mb-10">BACKDROPS</h1>
                <Swiper navigation={true} modules={[Navigation, Pagination]} className=" text-white">
                  {dataDetailImages?.data.backdrops.map((el, i) => {
                    return (
                      <SwiperSlide>
                        <img src={`https://image.tmdb.org/t/p/original${el.file_path}`} alt="backdrops" key={i} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              {/* Posters Gallery */}
              <div className=" w-full h-full">
                <h1 className=" text-3xl font-bold mb-10">POSTERS</h1>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  className=" cursor-grab">
                  <div>
                    {dataDetailImages?.data.posters.map((el, i) => {
                      return (
                        <SwiperSlide>
                          <img src={`https://image.tmdb.org/t/p/original${el.file_path}`} alt="posters" key={i} />
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
              {/* Similiar Movie */}
              <div className=" w-full h-full">
                <h1 className=" text-3xl font-semibold mb-10">YOU MAY ALSO LIKE</h1>
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}>
                  <div>
                    {dataDetailSimilar?.data.results.map((similar) => {
                      return (
                        <SwiperSlide>
                          <Link key={similar.id} to={`/movie/${similar.id}`}>
                            <img
                              src={`https://image.tmdb.org/t/p/original${similar.poster_path}`}
                              alt={similar.title}
                            />
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
