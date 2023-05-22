import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Color from "../../utils/color";
import MovieFavoriteList from "../../components/movieFavoriteList";
import { getFavorites } from "../../storage";
import { useIsFocused } from "@react-navigation/native";

export default function Favorite() {
  const [moviesFavorites, setMoviesFavorites] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    const getMoviesFavorites = async () => {
      if (isFocused) {
        const favorites = await getFavorites("@AppMovies");

        setMoviesFavorites(favorites);
      }
    };

    getMoviesFavorites();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites</Text>

      <FlatList
        style={styles.flatlistStyle}
        data={moviesFavorites.reverse()}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MovieFavoriteList dataSearchAndMovie={item} />}
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
