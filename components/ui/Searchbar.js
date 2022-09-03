import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

export const Searchbar = ({text = '', setText, onClick}) => {
  const [showX, setShowX] = useState(false);

  useEffect(() => {
    setShowX(text.trim() !== '');
  }, [text]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.search}
        source={require('../../assets/search.png')}
      />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={text}
        onChangeText={txt => setText(txt)}
        placeholderTextColor="#ccc"
      />
      {showX && (
        <Pressable onPress={() => setText('')}>
          <Image style={styles.x} source={require('../../assets/x.png')} />
        </Pressable>
      )}

      <Pressable style={styles.subbtn} 
      onPress={() => {
          onClick(true)
          setTimeout(() => {
            onClick(false)
          }, 800)  
        }}
      >
        <Text style={styles.btn} >Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    elevation: 200,
    shadowColor: '#aaa',
    elevation: 100,
    shadowColor: '#aaa',
  },
  input: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
  },
  search: {
    width: 35,
    height: 35,
  },
  x: {
    width: 35,
    height: 35,
  },
  subbtn: {
    flex: 0.35,
    backgroundColor: 'coral',
    height: '97%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 100,
    shadowColor: '#000',
  },
  btn: {
    color: 'white',
    fontSize: 16
  },
});
