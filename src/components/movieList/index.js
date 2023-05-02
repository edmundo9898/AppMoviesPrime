import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MovieListData from "../moveListData";
import Color from "../../utils/color";

const MovieList = ({ data, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data.slice(0, 13)}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MovieListData data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.text,
    marginLeft: 10,
    marginTop: 15,
  },
});

export default MovieList;
