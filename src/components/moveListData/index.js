import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import color from "../../utils/color";

const MovieListData = ({ data }) => {
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;

  const handleDetail = () => {
    navigation.navigate("Detail", { data: data });
  };

  return (
    <TouchableOpacity onPress={handleDetail} style={styles.containerButton}>
      <Image source={{ uri }} style={styles.imageCard} />
      <Text style={styles.titleMovieCard}>{data.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    marginVertical: 15,
    paddingStart: 10,
    paddingEnd: 10,
    width: 350,
    flexDirection:"column",
    alignItems: 'center',
  },
  imageCard: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    resizeMode: "cover",
  },
  titleMovieCard:{
    fontSize: 20,
    color: color.text,
    fontWeight: 'bold',
    marginTop: 5,
  }
});

export default MovieListData;
