import React, { useState } from 'react';
// import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Intro, Login, Signup, Home, Profile, Category} from './components';
import {Users} from './UserContext';
import {navigationRef} from './navigate'
import {Api} from './components/ui'

const Stack = createNativeStackNavigator();

export default function App() {
  const [api, setApi] = useState(' ')
  return (
    <Users>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{headerShown: !1}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Api" component={Api} options={{headerShown: !1}} />
        </Stack.Navigator>
      </NavigationContainer>

    </Users>
  );
}
