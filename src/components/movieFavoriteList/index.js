import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getFavorites } from "../../storage";
import color from "../../utils/color";

export default function movieFavoriteList({ dataListFake }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageAvatar} source={{ uri: dataListFake.avatar }} />
      <View style={styles.ContainerinfoMovie}>
        <Text style={styles.nameMovie}>{dataListFake.name}</Text>

        <Text style={styles.genresMovie}>Ação</Text>
        <Text style={styles.dateMovie}>??/??/??</Text>
      </View>
    </View>
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
