const API_KEY = process.env.TMDB_KEY;

export const getirMovies = async (type) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
  );

  //? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
  if (!res.ok) {
    throw new Error("fetch işleminde hata var");
  }

  const { results } = await res.json();

  return results;
}


export const getirMovieDetail = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );



  if (!res.ok) {
    throw new Error("fetch işleminde hata var");
  }

  const data = await res.json();

  return data;
};

export const getirYoutubeKey = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("fetch işleminde hata var");
  }

  const { results } = await res.json();

  return results[0]?.key
};
