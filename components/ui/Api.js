import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, Image, Linking, StyleSheet, Button, ScrollView } from 'react-native'
import {getApi} from '../../middelware'

export const Api = ({route}) => {
  const {url, title} = route.params
  const [data, setData] = useState({})

  useEffect(() => {
    const a = async() => {
      const b = await getApi(url)
      setData(b.data)
    }
    a()
  }, [])

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
    </ScrollView>
      <OpenURLButton url={data?.link} title={"Go to docs"}/>
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

  return <Button title={title} onPress={handlePress} />;
};


const styles = StyleSheet.create({
  con:{
    flex: 1,
    margin: 20
  },
  img: {
    width: '100%',
    height: '40%',
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
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center'
  },
  title: {
    color: 'green',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center'
  }
});