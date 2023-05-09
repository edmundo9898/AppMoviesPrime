import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../utils/color';

export default function Favorite() {
 return (
   <View style={styles.container}>
    <Text style={styles.text}>Favorite</Text>
    
    
   </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Color.background,
    },
    text:{
        color: Color.text,
        fontSize: 20,
        fontWeight: 'bold',
    }
    

})


