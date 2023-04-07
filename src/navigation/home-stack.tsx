import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '_screens/home';
const Stack = createStackNavigator();

const HomeStack =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>
  );
};


export default HomeStack;
