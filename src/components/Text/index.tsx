import React from 'react';
import { Text as TextItem,TextStyle,TextProps as TextDefaultProps } from 'react-native';

import theme from '_theme/theme';

type TextProps = {
  size?:keyof typeof theme.font.size;
  weight?:keyof typeof theme.font.weight;
  color?: keyof typeof theme.colors;
  children: React.ReactNode
} & TextDefaultProps
const Text= ({size='md',weight='semiBold',color='black',children,...extraProps}:TextProps) => {

  const styles = {
    fontSize:theme.font.size[size],
    fontWeight:theme.font.weight[weight],
    color:theme.colors[color],
  } as TextStyle;

  return <TextItem style={styles} {...extraProps}>{children}</TextItem>;
};

export default Text;
