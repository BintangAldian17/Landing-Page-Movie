const baseURL = "https://api.themoviedb.org/3"
const apiKey = "?api_key=dc9f0cf977927e2e8903e7919c2ce793"

const mediaType = {
    movie: 'movie',
    tv: 'tv'
}

const mediaCategory = {
    popular: 'popular',
    top_rated: 'top_rated'
}
const backdropPath = (imgEndpoint) => `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint) => `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

const youtubePath = (videoId) => `https://ww.youtube.com/embed${videoId}?controls=0`;

export const tmdbConfigs = {
    baseURL,
    apiKey,
    mediaType,
    mediaCategory,
    backdropPath,
    posterPath,
    youtubePath
};
