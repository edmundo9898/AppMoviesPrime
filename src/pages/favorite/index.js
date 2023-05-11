import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Color from "../../utils/color";
import MovieFavoriteList from "../../components/movieFavoriteList";
import { getFavorites } from "../../storage";

export default function Favorite() {
  const [moviesFavorites, setMoviesFavorites] = useState([]);

  useEffect(() => {
    const getMoviesFavorites = async () => {
      const favorites = await getFavorites("@AppMovies");
      console.log(favorites)

      setMoviesFavorites(favorites);
    };

    getMoviesFavorites();
  }, []);

  /* const listFake = [
    {
      id: "1",
      name: "Teste1",
      avatar:
        "https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg",
    },
    {
      id: "2",
      name: "Teste2",
      avatar:
        "https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg",
    },
    {
      id: "3",
      name: "Teste3",
      avatar:
        "https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg",
    },
    {
      id: "4",
      name: "Teste4",
      avatar:
        "https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg",
    },
    {
      id: "5",
      name: "Teste1",
      avatar:
        "https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg",
    },
    {
      id: "6",
      name: "Teste1",
      avatar:
        "https://img.elo7.com.br/product/zoom/2368C5D/big-poster-filme-marvel-venom-tamanho-90x60-cm-loot-op-010-geek.jpg",
    },
  ]; */
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites</Text>

      <FlatList
        style={styles.flatlistStyle}
        data={moviesFavorites}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MovieFavoriteList dataListFake={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.background,
    paddingTop: 10,
  },
  text: {
    color: Color.text,
    fontSize: 25,
    fontWeight: "bold",
  },
  flatlistStyle: {
    width: "100%",
    marginTop: 15,
  },
});
