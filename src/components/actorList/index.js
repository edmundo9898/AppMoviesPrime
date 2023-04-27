import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ActorListData from "../actorListData";
import Color from "../../utils/color";

const ActorList = ({ dataCast, titleCast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleCast}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={dataCast}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ActorListData name={item.name} />}
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

export default ActorList;
