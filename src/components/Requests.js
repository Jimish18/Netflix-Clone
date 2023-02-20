const API_KEY = "8fc628c8229baa4b85bbf0751b6ba698";

const requests = 
{
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated : `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies : ``
}