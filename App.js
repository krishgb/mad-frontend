import React from "react";
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Intro} from './components'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Intro" component={Intro} options={{headerShown: !1}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}