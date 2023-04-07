import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import BottomTabs from '_navigation/bottom-tabs';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <BottomTabs/>
    </>
  );
}

