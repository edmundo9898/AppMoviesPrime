import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Color from '../../utils/color';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import apiKey from '../../services/apikey';



export default function Detail() {
     
    const route = useRoute();
    const uri = `https://image.tmdb.org/t/p/w500/${route.params?.data.poster_path}`;
    const [runtime, setRuntime] = useState(null);
      
    useEffect( () => {
          const LoadRunTime = async () => {
            const response1 = await api.get(`/movie/${route.params?.data.id}?${apiKey}&language=pt-BR`);
            setRuntime(response1.data.runtime);
            console.log(response1.data.runtime);
          }

          LoadRunTime();
    },[]);

 return (
   <View style={styles.container}>
    <StatusBar/>
    <Image
      source={{ uri,}}
      style={styles.imageDetail}
    />
    <View style={styles.containerInfoMovie}>
        <Text style={styles.text}>{route.params?.data.title}</Text>
        <Text style={styles.text}>{route.params?.data.release_date}</Text>  
        <Text style={styles.text}>Duração: {runtime} min</Text>  
        
    </View>
    
    <Text style={styles.text}>{route.params?.data.overview}</Text>
    
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    imageDetail:{
     width: '70%',
     borderRadius: 10,
     height: 350,
     resizeMode: 'contain',
     marginTop: 10,
    },
    containerInfoMovie:{
        width: '100%',
        borderWidth: 2,
    },
    text:{
        color: Color.text,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 25,
    }
    

})
