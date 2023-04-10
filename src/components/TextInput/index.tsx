import React from 'react';
import { View,TextInput as TextInputItem,TextInputProps as TextInputDefaultProps } from 'react-native';
import Text from '_components/Text';
import theme from '_theme/theme';

import {styles } from './styles';
type TextInputProps = {

  label?:string;
} & TextInputDefaultProps


const TextInput = ({label}:TextInputProps) => {
  return <View style={styles.container}>
    {label && <View style={styles.labelContainer}>
      <Text color='gray'>{label}</Text>
    </View>}
    <TextInputItem style={styles.input} placeholder='Casa'/>
  </View>;
};

export default TextInput;
