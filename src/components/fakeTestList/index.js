import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Lista({ data }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.avatar }} style={styles.avatar} />
      <Text style={styles.textName}>{data.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    padding: 14,
    paddingLeft: 8,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  textName: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
