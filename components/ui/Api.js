import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Image, Linking, StyleSheet, Button, ScrollView, Pressable, TextInput } from 'react-native'
import {getApi} from '../../middelware'

export const Api = ({route}) => {
  const {url, title} = route.params
  const [data, setData] = useState({})
  const [inp, setInp] = useState(false)

  useEffect(() => {
    const a = async() => {
      const b = await getApi(url)
      setData(b.data)
    }
    a()
  }, [])

  const save = () => {

    setInp(false)
  }

  return (
    <View style={styles.con}>
    <Text style={styles.title}>{title}</Text>
      <Image source={{uri: data?.img}} style={styles.img} />
    <ScrollView>
      <Text style={styles.desc}>{data?.desc}</Text>
      <View style={styles.h}>
        <Text style={styles.hh}>Highlights</Text>
        {data?.tags?.map((tag, i) => {
          return (
            <Text key={i} style={styles.ht}>{tag}</Text>
          )
        })}
      </View>
      {inp && 
      <>
        <TextInput placeholder='Enter API ID' style={styles.input} placeholderTextColor="black" />
        <Pressable style={styles.save} onPress={save}><Text style={styles.stxt}>Save</Text></Pressable>
      </>
      }
      <Pressable style={styles.reg} onPress={() => setInp(true)}><Text style={styles.cred}>Register Credentials</Text></Pressable>
    </ScrollView>
      <OpenURLButton url={data?.link}/>
    </View>
  )
}

const OpenURLButton = ({ url, title }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    // if (supported) {
      await Linking.openURL(url);
    // } else {
    //   Alert.alert(`Don't know how to open this URL: ${url}`);
    // }
  }, [url]);

  return <Button title={"Open Documentation"} onPress={handlePress} />;
};


const styles = StyleSheet.create({
  con:{
    flex: 1,
    margin: 20,
    marginBottom: 0
  },
  img: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
    borderRadius: 5
  },
  hh: {
    color: 'red',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 19,
    elevation: 10,
    shadowColor: '#000'
  },
  ht: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10
  },
  desc: {
    fontSize: 18,
    backgroundColor: '#ccc',
    color: 'black',
    margin: 5,
    textAlign: 'justify',
    padding: 10,
    borderRadius: 5
  },
  title: {
    color: 'green',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center'
  },
  reg: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10
  },
  cred: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white'
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 18,
    color: 'black',
    borderRadius: 5,
    paddingLeft: 12
  },

  save: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 100,
    margin: 'auto'
  },
  stxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});