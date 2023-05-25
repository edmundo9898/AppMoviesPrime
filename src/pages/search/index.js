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
import api from "../../services/api";
import apiKey from "../../services/apikey";
import color from "../../utils/color";
import MovieFavoriteList from "../../components/movieFavoriteList";


export default function Search() {
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState([]);



  useEffect(() => {
    const searchMovie = async () => {
      if (search === "") {
        setSearchResult([]);
      } else {
        const response = await api.get(
          `search/movie?${apiKey}&language=pt-BR&query=${encodeURIComponent(
            search
          )}`
        );
        const result = response.data.results.filter(
          (item) =>
            item.original_title.toLowerCase().indexOf(search.toLowerCase()) !==
            -1
        );
        setSearchResult(result);
      };

     
    };
    if(search.trim() !== ""){
      searchMovie();
    }else{
      setSearchResult([]);
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
          renderItem={({ item }) => (
            <MovieFavoriteList dataSearchAndMovie={item} />
          )}
        />
      ) : (
        <View style={styles.containerNoMovie}>
          {search !== "" ? (
            <Text style={styles.textNoMovie}>Nenhum filme encontrado</Text>
          ) : (
            <Text style={styles.textNoMovie}>Digite um filme</Text>
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
    paddingTop: 25,
    alignItems: 'center',
    width: "100%",
  },
  title: {
    color: color.text,
    fontSize: 20,
  },
  containerSearch: {
    width: "90%",
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
  containerNoMovie: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textNoMovie: {
    fontSize: 20,
    color: color.text,
    fontWeight: "bold",
  },
});
