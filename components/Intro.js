import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const Intro = ({navigation}) => {

    useEffect(() => {
        setTimeout( () => {
          navigation.navigate('Login')
        }, 2500)
      }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/logo.png')} />
            <Text style={styles.txt}>API FINDER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txt: {
        color: "black",
        fontSize: 26,
        fontWeight: 'bold'
    },
    img: {
        width: 150,
        height: 150
    }
})