import React, {useState, useEffect} from 'react';
import { View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import Api from '../../services/api';
import LogoApp from '../../components/logoApp';
import MovieList from '../../components/movieList';
import Colors from '../../utils/color';
const apiKey = 'api_key=2432a73dd847e779cd6daa784c7d8d94';

export default function Home() {

  const [moviePoupular, setMoviePopular] = useState([]);
  const [movieNowPlaying, setMovieNowPlaying] = useState([]);
  const [movieUpComingList, setMovieUpComingList] = useState([]);  
     
  useEffect(() => {
    
    const loadApi = async () => {
      
      // Filmes populares
      const response1 = await Api.get(`/movie/popular?${apiKey}&page=${1}`);
      setMoviePopular(response1.data.results);
 
      // filmes em cartaz
      const response2 = await Api.get(`/movie/now_playing?${apiKey}&page=${1}`);
      setMovieNowPlaying(response2.data.results);
      
      // Próximas Estreais
      const response3 = await Api.get(`/movie/upcoming?${apiKey}&page=${1}`);
      setMovieUpComingList(response3.data.results);
    }

    loadApi()

  }, [])

 

 return (
   
    <View style={styles.container} >
      <StatusBar/>
      <LogoApp/> 
      <ScrollView>   
        <MovieList  data={moviePoupular} title='Filmes Populares' />
        <MovieList data={movieNowPlaying} title='Filmes em cartaz'/>
        <MovieList data={movieUpComingList} title='Próximas Estreias'/>
      </ScrollView>
    </View>
   
  )
 }
  


const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background,
  },
});