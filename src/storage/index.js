import AsyncStorage from "@react-native-async-storage/async-storage";

// um função que irá salvar,
// uma para pegar os favoritos atraves da chave
// uma função que irá remover.

export const saveFavorite = async (key, newMovie) => {
  try {
    const myFavorites = await getFavorites(key);

    const hasMovie = myFavorites.some((item) => item.id === newMovie);
    if (hasMovie) {
      console.log("Esse filme já está favoritado");
      return;
    }
    myFavorites.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
    console.log("Filme favoritado")
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getFavorites = async (key) => {
  const favorites = await AsyncStorage.getItem(key);
  return JSON.parse(favorites) || [];
};

export const removeFavorite = async (id) => {
  try {
    const myFavorites = await getFavorites("@AppMovies");

    const removeMovieFavorite = myFavorites.filter((mov) => mov.id != id);

    await AsyncStorage.setItem(
      "@AppMovies",
      JSON.stringify(removeMovieFavorite)
    );
    console.log("Filme removido!!");
    return myFavorites;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const movieIsFavorite = async (movieId) => {
  try {
    const movieFavorites = await getFavorites("@AppMovies");

    const isFavorite = movieFavorites.find((item) => item.id === movieId.id);

    if (isFavorite) {
      return true;
    }
    return false;
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
};
