import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {topics} from '../dbs';
import SelectBox from 'react-native-dropdown-select-list'
import {cate} from '../middelware'
import { RenderItem } from './ui';

const data = topics.map(topic => ({key: Object.keys(topic)[0], value: Object.values(topic)[0]}))

export const Category = ({navigation}) => {
  const [selected, setSelected] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    const a = async() => {
      const m = await cate(selected)
      if(m.done){
        const data = m.data
        const newList = []
        for(let i of data){
          console.log(i)
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
    a()
  }, [selected])


  return (
    <ScrollView style={styles.container}>
    

      <SelectBox 
        data={data}
        placeholder='Select Category'
        dropdownTextStyles={{color: 'black', textTransform: 'capitalize'}}
        inputStyles={{color: 'black', textTransform: 'capitalize'}}
        setSelected={setSelected}
      />
      <RenderItem data={list} navigation={navigation}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 7
  },
  txt: {
    color: 'black',
    textTransform: 'capitalize'
  }
});
