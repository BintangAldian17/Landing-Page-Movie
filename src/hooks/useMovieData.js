import { useInfiniteQuery, useQuery } from "react-query"
import axios from "axios"
import { tmdbConfigs } from "../configs/tmdb-configs"
const { baseURL, apiKey } = tmdbConfigs


export const getPopularMovies = ({ pageParam, mediaCategory = 'popular' }) => {
    return axios.get(`${baseURL}/movie/${mediaCategory}${apiKey}&page=${pageParam}`)
}

export const getPopularTv = ({ pageParam, mediaCategory = 'popular' }) => {
    return axios.get(`${baseURL}/tv/${mediaCategory}${apiKey}&page=${pageParam}`)
}

export const getGenresMovie = () => {
    return axios.get(`${baseURL}/genre/movie/list${apiKey}`)
}

export const getGenresTv = () => {
    return axios.get(`${baseURL}/genre/tv/list${apiKey}`)
}

export const getDetail = ({ mediaType, mediaId }) => {
    return axios.get(`${baseURL}/movie/${mediaId}${apiKey}`)
}

export const getDetailCredits = ({ mediaId }) => {
    return axios.get(`${baseURL}/movie/${mediaId}/credits${apiKey}`)
}

export const getDetailSimilar = ({ mediaId }) => {
    return axios.get(`${baseURL}/movie/${mediaId}/similar${apiKey}`)
}

export const getDetailRecommendations = ({ mediaId }) => {
    return axios.get(`${baseURL}/movie/${mediaId}/recommendations${apiKey}`)
}

export const getDetailImages = ({ mediaId }) => {
    return axios.get(`${baseURL}/movie/${mediaId}/images${apiKey}`)
}


