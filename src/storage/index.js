import AsyncStorage from "@react-native-async-storage/async-storage";

// um função que irá salvar,
// uma para pegar os favoritos atraves da chave
// uma função que irá remover.

export const saveFavorite = async (key, newMovie) => {
  try {
    let myFavorites = await getFavorites(key);

    let hasMovie = myFavorites.some((item) => item.id === newMovie);
    if (hasMovie) {
      console.log("Esse filme já está favoritado");
      return;
    }

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
    console.log("Filme Favoritado com Sucesso!");
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
    let myFavorites = getFavorites("@AppMovies");

    let removeMovieFavorite = myFavorites.filter((mov) => mov.id !== id);

    await AsyncStorage.setItem(
      "AppMovies",
      JSON.stringify(removeMovieFavorite)
    );
    console.log("Filme removido!!");
  } catch (error) {
    console.log("ERROR", error);
  }
};
