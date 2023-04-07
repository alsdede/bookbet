import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '_navigation/home-stack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return   (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
    </Tab.Navigator>);
};

export default BottomTabs;
