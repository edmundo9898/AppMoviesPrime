import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function actorListData({ actorData }) {
  const uri = `https://image.tmdb.org/t/p/w500/${actorData.profile_path}`;
  return (
    <TouchableOpacity onPress={() =>console.log(actorData.id)} style={styles.containerButton}>
      <Image source={{ uri }} style={styles.imageActor} />
      <Text style={styles.text}>{actorData.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerButton:{
    padding: 10,
    alignItems: "center",
  },
  imageActor: {
    height: 150,
    width: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover"
  },
  text: {
    fontSize: 14,
    color: "#ffff",
  },
});
