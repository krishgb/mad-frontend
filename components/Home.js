import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  ToastAndroid,
  Image,
} from 'react-native';
import {Searchbar, RenderItem} from './ui';
import {search, getSome} from '../middelware';

export const Home = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);
  const [btn, setBtn] = useState(false);

  const a = async () => {
    const data = await search(searchText);
    if (!data.done) {
      ToastAndroid.show(data.msg, ToastAndroid.SHORT);
    } else {
      setList([...data.data]);
    }
  };

  useEffect(() => {
    const b = async() => {
      const data = await getSome()
      if (!data.done) {
        ToastAndroid.show(data.msg, ToastAndroid.SHORT);
      } else {
        const d = data.data
        const newList = []
        for(let i of d){
          const {desc, img, url, title} = i
          newList.push({
            logo: img,
            title,
            description: desc,
            url
          })
        }

        setList(newList)
      }
    }
    b()
  }, [])


  useEffect(() => {
    if (btn) {
      a();
    }
  }, [btn]);



  return (
    <View style={styles.container}>
      <Searchbar text={searchText} setText={setSearchText} onClick={setBtn} />
      {/* <Button
        title="Search by Category"
        onPress={() => navigation.navigate('Category')}
      /> */}
      <RenderItem data={list} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,

  },
  txt: {
    color: 'black',
    fontSize: 85,
  },
});
