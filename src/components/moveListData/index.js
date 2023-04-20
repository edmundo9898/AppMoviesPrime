import React from 'react';
import { TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';



const  MovieListData = ({data}) => {

  const navigation = useNavigation();

 const uri = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;

 const handleDetail = () => {
  navigation.navigate('Detail', {data: data})
}

  
  

 return (
   <TouchableOpacity onPress={handleDetail} style={styles.containerButton}>
    <Image
     source={{ uri,}}
     style={styles.imageCard}
    />
   </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  containerButton:{
    marginVertical: 20,
    paddingStart: 10,
    paddingEnd: 10,
  },
  imageCard:{
    width: 120,
    height: 180,
    borderRadius: 10,
  }
})


export default MovieListData;