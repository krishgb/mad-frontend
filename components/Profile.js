import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {getUserDetails} from '../dbs'
import {SvgUri} from 'react-native-svg'


export const Profile = ({navigation}) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const a = async () => {
      const user = JSON.parse(await AsyncStorage.getItem('user'))
      if(user === null){
        navigation.navigate('Login')
        return
      }
      const b = await getUserDetails(user.email)
      if (b.done) setData({...b.data, email: user.email})
    }
    a()
  }, [])

  const logout = async () => {
    await AsyncStorage.removeItem('user')
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      {data.username && (
        <>
          <View style={styles.i}>
            <SvgUri
              style={styles.img}
              width={100}
              height={100}
              uri={`https://avatars.dicebear.com/api/bottts/${data.username}.svg`}
            />
          </View>
          <Text style={styles.name}>
            <Text style={styles.username}>USERNAME:</Text>
            {'  ' + data.username}
          </Text>
          <Text style={styles.name}>
            <Text style={styles.username}>Email:</Text>
            {'  ' + data.email}
          </Text>
        </>
      )}
      <View style={styles.btn}>
        <Pressable style={styles.out} onPress={logout}><Text style={styles.log}>Logout</Text></Pressable>
        <Pressable style={styles.cred} onPress={() => navigation.navigate('Saved')}><Text style={styles.cre}>Saved API credentials</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    marginBottom: 0,
  },
  username: {
    color: 'green',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  name: {
    color: 'black',
    fontSize: 20,
    marginLeft: 150,
    margin: 15,
  },
  i: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'flex-start',
  },

  out: {
    backgroundColor: 'red',
    borderRadius: 5,
    elevation: 15,
    shadowColor: '#000'
  },
  cred: {
    backgroundColor: 'lime',
    borderRadius: 5,
    elevation: 15,
    shadowColor: '#000'
  },
  log: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: 'white'

  },
  cre: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  btn: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150
  }
})
