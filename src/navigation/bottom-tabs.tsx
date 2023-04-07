import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '_navigation/home-stack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return   (
    <NavigationContainer>
      <Tab.Navigator   screenOptions={{
        headerShown: false,
      }}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
