const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

const request = {
  fetchTopScienceFiction: `discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=vote_average.desc`,
  fetchActionScienceFiction: `discover/movie?api_key=${API_KEY}&with_genres=878,28`,
  fetchAnimationScienceFiction: `discover/movie?api_key=${API_KEY}&with_genres=878,16`,
  fetchFantasy: `discover/movie?api_key=${API_KEY}&with_genres=14`
}

export default request
