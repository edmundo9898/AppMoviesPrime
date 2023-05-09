import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getFavorites } from '../../storage';

export default function movieFavoriteList() {
  
 return (
   <View style={styles.container}>
    <Text>oi</Text>

   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 70,
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})