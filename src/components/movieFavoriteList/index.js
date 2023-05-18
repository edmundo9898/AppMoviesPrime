import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import color from "../../utils/color";

export default function MovieFavoriteList({ dataListFake }) {
  const uri = `https://image.tmdb.org/t/p/w500/${dataListFake.poster_path}`;
  const dateMovie = dataListFake.release_date
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.imageAvatar} source={{ uri }} />
      <View style={styles.ContainerinfoMovie}>
        <Text style={styles.nameMovie}>{dataListFake.title}</Text>

        <Text style={styles.genresMovie}>Ação</Text>
        <Text style={styles.dateMovie}>{dateMovie}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: "row",
    marginVertical: 15,
    marginHorizontal: 10,
  },
  imageAvatar: {
    width: "30%",
    height: "100%",
    resizeMode: "cover",
  },
  ContainerinfoMovie: {
    paddingStart: 15,
    paddingTop: 5,
    height: "100%",
    width: "70%",
  },
  nameMovie: {
    fontSize: 20,
    fontWeight: "800",
    color: color.text,
    marginBottom: 2,
  },
  genresMovie: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.text,
    marginBottom: 50,
  },
  dateMovie: {
    fontSize: 15,
    color: color.text,
    fontWeight: "bold",
  },
});
