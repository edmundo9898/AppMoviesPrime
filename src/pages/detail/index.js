import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../utils/color';
import { useRoute } from '@react-navigation/native';

export default function Detail() {
     
    const route = useRoute();
    const data = route.params;



 return (
   <View style={styles.container}>
    <Text style={styles.text}>{data?.data.title}</Text>
    <Text style={styles.text}>{data?.data.release_date}</Text>
    <Text style={styles.text}>{data?.data.overview}</Text>
    
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.background,
    },
    text:{
        color: Color.text,
        fontSize: 20,
        fontWeight: 'bold',
        margin: 25,
    }
    

})
