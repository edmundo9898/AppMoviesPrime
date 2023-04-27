import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  SectionList,
} from "react-native";
import Color from "../../utils/color";
import ActorList from "../../components/actorList";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";
import apiKey from "../../services/apikey";
const { width } = Dimensions.get("window");
const { Item: SectionListItem } = SectionList;

export default function Detail() {
  const route = useRoute();
  // const uri é onde está buscando a imagem do filme
  const uri = `https://image.tmdb.org/t/p/w500/${route.params?.data.poster_path}`;
  const [runtime, setRuntime] = useState(null);
  const [genres, setGenres] = useState([]);
  const [director, setDirector] = useState([]);
  const [cast, setCast] = useState([]);

  // puxando apenas o ano do lançamento do filme
  const releaseData = route.params?.data.release_date;
  const year = new Date(releaseData).getFullYear();
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
      /* o filter está filtrando se o trabalho da pessoa é de diretor, 
          é retornado o array de informações dos diretores */
      // o map está retornando apenas os nomes deles no array
      const response3 = await api.get(
        `/movie/${route.params?.data.id}/credits?${apiKey}&language=pt-BR`
      );

      const directors = response3.data.crew.filter(
        (value) => value.job === "Director"
      );
      const directorName = directors.map((value) => value.name);
      setDirector(directorName);

      const response4 = await api.get(
        `/movie/${route.params?.data.id}/credits?${apiKey}&language=pt-BR&fields=cast`
      );
      /* console.log(response4.data.cast) */
      const infoActor = response4.data.cast.filter(
        (value) => value.id != undefined
      );
      setCast(infoActor);
    };
    LoadRunTime();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
       
       <ScrollView>
      <Image source={{ uri }} style={styles.imageDetail} />

      <View style={styles.containerInfoMovie}>
        <Text style={styles.titleMovie}>{route.params?.data.title}</Text>
        <View style={styles.containerInfoDetailMovie}>
          <Text style={styles.textInfoDetailMovie}>{year}</Text>
          <View style={styles.ball}></View>

          {/* o map está retornando o genero do filme. slice está limitando em 2, e o join está colocando a barra no meio deles*/}
          <Text style={styles.textInfoDetailMovie}>
            {genres
              .map((value) => value.name)
              .slice(0, 2)
              .join("/")}
          </Text>

          <View style={styles.ball}></View>
          <Text style={styles.textInfoDetailMovie}>{runtime}min</Text>
        </View>

        {/* o slice irar mostrar apenas 2 nomes de diretores, e o join está colocando virgula quando tiver mais de 1 diretor   */}
        <Text style={styles.nameDirector}>
          Diretor: {director.slice(0, 2).join(", ")}
        </Text>
      </View>

      <Text style={styles.overView}>Sinopse</Text>
      <Text style={styles.overViewText}>{route.params?.data.overview}</Text>

      <ActorList dataCast={cast} titleCast={"Elenco"} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Color.background,
  },
  imageDetail: {
    width: width,
    /* borderRadius: 10, */
    height: 400,
    resizeMode: "stretch",
    marginTop: 0,
    marginBottom: 20,
  },
  containerInfoMovie: {
    width: "100%",
    paddingStart: 14,
  },
  titleMovie: {
    color: Color.text,
    fontSize: 25,
    fontWeight: "bold",
  },
  containerInfoDetailMovie: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  textInfoDetailMovie: {
    color: "#e2e2e2",
    fontWeight: "500",
    marginEnd: 5,
    fontSize: 15,
  },
  ball: {
    width: 5,
    height: 5,
    borderRadius: 20,
    backgroundColor: "#e2e2e2",
    marginRight: 5,
  },
  nameDirector: {
    fontSize: 18,
    color: Color.text,
    fontWeight: "bold",
  },
  overView: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.text,
    marginTop: 23,
  },
  overViewText: {
    fontSize: 15,
    fontWeight: 500,
    color: Color.text,
    padding: 10,
    lineHeight: 23,
    textAlign: "justify",
  },
});
