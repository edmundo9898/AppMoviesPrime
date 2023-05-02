import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ActorListData from "../actorListData";
import Color from "../../utils/color";

const ActorList = ({ dataCast, titleCast }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleCast}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dataCast.slice(0, 10)}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ActorListData actorData={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.text,
    marginLeft: 10,
    marginTop: 20,
  },
});

export default ActorList;
