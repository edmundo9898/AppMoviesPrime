import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FakeTest from "../../components/fakeTest";
import FakeTestList from "../../components/fakeTestList";
import api from "../../services/api";
import apiKey from "../../services/apikey";
import color from "../../utils/color";

export default function Search() {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);

  /* 1- antes de pesquisar, que ele apareça somente que não tem filme encotrado
   2- quando pesquisar mostra todos os resultados que foi colocado no campo input  */

  useEffect(() => {
    if (search === "") {
      setSearchResult([]);
    } else {
      const result = FakeTest.filter((item) =>
        item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      setSearchResult(result);
    }
  }, [search]);
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <TouchableOpacity style={styles.containerIcon}>
          <Ionicons name="search" color="#003561" size={30} />
        </TouchableOpacity>
        <TextInput
          style={styles.inputSearch}
          placeholder="Digite o filme.."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>

      {searchResult.length > 0 ? (
        <FlatList
         showsVerticalScrollIndicator={false}
          data={searchResult}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FakeTestList data={item} />}
        />
      ) : (
        <View>
          {search !== "" ? (
            <Text>Nenhum filme encontrado</Text>
          ) : (
            <Text>Digite um filme</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.background,
    flex: 1,
    paddingTop: 15,
    width: "100%",
    padding: 20,
  },
  title: {
    color: color.text,
    fontSize: 20,
  },
  containerSearch: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  inputSearch: {
    width: "90%",
    maxWidth: "90%",
    fontSize: 18,
  },
  containerIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
