import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import {navigate} from '../../navigate'

export const BottomBar = ({navigation}) => {
    const [home, setHome] = useState(true)

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            height: 45,
            flexDirection: 'row',
            alignItems: 'center'
        },
        m: {
            borderColor: '#ccc',
            borderLeftWidth: 2,
            height: '90%'
        },
        pressh: {
            width: '50%',
        },
        pressp: {
            width: '50%',
        },
        home: {
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
            backgroundColor: home ? 'coral' : 'white',
            color: home ? 'white': 'black',
            padding: 15
        },
        profile: {
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
            backgroundColor: !home ? 'coral' : 'white',
            color: !home ? 'white': 'black',
            padding: 15
        }
    })

    const change = (name) =>{
        setHome(!home)
        navigate(name)
    }
    return(
        <View style={styles.container}>
        <Pressable style={styles.pressh} onPress={() => change('Home')}>
            <Text style={styles.home}>Home</Text>
        </Pressable>
        <Text style={styles.m}></Text>
        <Pressable style={styles.pressp} onPress={() => change('Category')}>
            <Text style={styles.profile}>Category</Text>
        </Pressable>
        </View>
    )
}

