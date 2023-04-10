import React from 'react';
import { View,ViewStyle,StyleSheet } from 'react-native';
import theme from '_theme/theme';

import Svg,{Path} from 'react-native-svg';

type IconProps = {
  size?:number
  color?:string
}

const LolIcon = ({size=30,color='#333'}:IconProps) => {

  const stylesSize = {
    height:size,
    width:size
  } as ViewStyle;
  return (
    <View style={[styles.container,stylesSize]}>
      <Svg  fill="none"viewBox="0 0 50 51"><Path fill={color} d="M9.375 19.32C9.375 8.315 6.25 1.904 0 .089h23.958v38.462H50v11.538H9.375v-30.77Z"/></Svg>
    </View>
  );
};

export default LolIcon;

export const styles = StyleSheet.create({
  container: {

  },
});
