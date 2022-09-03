import React from 'react';
import {Image, Text, View, ScrollView, StyleSheet, Pressable} from 'react-native';


export const RenderItem = ({data, navigation}) => {
  const press = (url, title) => {
    console.log(url, "panni")
    navigation.navigate('Api', {
      url, title
    })
  }
  return (
  <ScrollView>
  {data.map((d, i) => (
    <Pressable key={i} onPress={() => press(d["url"], d['title'])}>
    {console.log(d.url)}
      <View style={styles.item} >
        <Image style={styles.item_img} source={{uri: d.logo}} />
        <View style={styles.item_txt}>
          <Text style={styles.item_title}>{d.title}</Text>
          <Text style={styles.item_desc} numberOfLines={2}>
            {d.description}
          </Text>
        </View>
      </View>
    </Pressable>
      )
      )}
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: '95%',
    backgroundColor: '#fff',
    elevation: 15,
    shadowColor: '#000',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 5,
  },
  item_img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  item_txt: {
    marginLeft: 10,
    width: '75%',
  },
  item_title: {
    color: 'black',
    fontSize: 19,
    textAlign: 'left',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  item_desc: {
    color: 'black',
    width: '80%',
    textAlign: 'justify',
  },
});
