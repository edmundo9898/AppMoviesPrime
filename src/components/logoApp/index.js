import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LogoApp() {
 return (
   <View style={styles.containerLogo}>
    <Text style={styles.textLogo}>Movies Prime</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    containerLogo:{
        alignSelf: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#374582',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15, 
        paddingRight: 15,
        marginTop: 16,
        marginLeft: 10,
        marginBottom: 25,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,

    },
    textLogo:{
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    }
})