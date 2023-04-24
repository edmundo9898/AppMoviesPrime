import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import Color from "../../utils/color";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";
import apiKey from "../../services/apikey";
import color from "../../utils/color";

export default function Detail() {
  const route = useRoute();
  const uri = `https://image.tmdb.org/t/p/w500/${route.params?.data.poster_path}`;
  const [runtime, setRuntime] = useState(null);
  const [genres, setGenres] = useState([]);

  const limit = 2;

  // puxando apenas o ano do lançamento do filme
  const releaseData = route.params?.data.release_date;
  const year = new Date(releaseData).getFullYear();
  const [director, setDirector] = useState([]);
  // puxando apenas o ano do lançamento do filme

  useEffect(() => {
    const LoadRunTime = async () => {
      // duração do filme
      const response1 = await api.get(
        `/movie/${route.params?.data.id}?${apiKey}&language=pt-BR`
      );
      setRuntime(response1.data.runtime);

      // Gênero do filme
      const response2 = await api.get(
        `/movie/${route.params?.data.id}?${apiKey}&language=pt-BR`
      );
      setGenres(response2.data.genres);

      // Diretor do filme
      const response3 = await api.get(
        `/movie/${route.params?.data.id}/credits?${apiKey}&language=pt-BR`
      );

      /* o filter está filtrando se o trabalho da pessoa é de diretor, 
         se caso for é retornado o array de informações dos diretores */
      const directors = response3.data.crew.filter(
        (person) => person.job === "Director"
      );

      // o map está recebendo o directors que está informando os detalhes dos diretores, e retornando apenas os nomes deles no array
      const searchDirectors = directors.map((directors) => directors.name);

      setDirector(searchDirectors);
    };
    LoadRunTime();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar />
        <Image source={{ uri }} style={styles.imageDetail} />
        <View style={styles.containerInfoMovie}>
          <Text style={styles.titleMovie}>{route.params?.data.title}</Text>
          <View style={styles.containerInfoDetailMovie}>
            <Text style={styles.textInfoDetailMovie}>{year}</Text>
            {genres.splice(0, 1).map((genre, index) => (
              <Text style={styles.textInfoDetailMovie} key={genre.id}>
                {genre.name}
              </Text>
            ))}
            <Text style={styles.textInfoDetailMovie}>
              Duração: {runtime} min
            </Text>
          </View>

          {director.splice(0, limit).map((personDirector) => (
            <Text style={styles.text} key={personDirector.id}>
              {personDirector}
            </Text>
          ))}
        </View>

        <Text style={styles.overView}>Sinopse</Text>

        <Text style={styles.text}>{route.params?.data.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.background,
  },
  imageDetail: {
    width: "70%",
    borderRadius: 10,
    height: 350,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 20,
  },
  containerInfoMovie: {
    width: "100%",
    borderWidth: 2,
  },
  titleMovie: {
    color: Color.text,
    fontSize: 25,
    fontWeight: "bold",
  },
  containerInfoDetailMovie: {
    flexDirection: "row",
  },
  textInfoDetailMovie: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.text,
    marginRight: 10,
  },
  text: {},
  overView: {
    fontSize: 24,
    fontWeight: "bold",
    color: color.text,
  },
});
