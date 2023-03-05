export const useGetGenresName = (genresList, id) => {
    //useGetGenresName = (genresList, id)
    let genres = []
    if (genresList && id) {
        genres = genresList.filter((genre => {
            return id.includes(genre.id)
        }))

    }
    return genres
}