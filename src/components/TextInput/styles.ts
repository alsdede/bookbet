import {StyleSheet} from 'react-native';
import theme from '_theme/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    maxHeight:50,

  },
  labelContainer:{
    alignItems:'flex-start',
    justifyContent:'center',
    padding:2,
  },
  input:{
    backgroundColor:theme.colors.white,
    borderRadius:theme.border.radius,
    padding:theme.spacings.xsmall
  }
});
