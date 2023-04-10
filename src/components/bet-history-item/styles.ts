import {StyleSheet} from 'react-native';
import theme from '_theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginBottom:theme.spacings.xsmall,

  },
  header:{
    flexDirection:'row',
    alignItems:'center'
  },
  status:{
    paddingHorizontal:theme.spacings.small,
    borderTopLeftRadius:theme.border.radius,
    borderTopRightRadius:theme.border.radius,
    backgroundColor:theme.colors.red,
    paddingVertical:2,
    maxWidth:100,
    alignItems:'center',
    justifyContent:'center',
  },
  type:{
    backgroundColor:theme.colors.primary,
    paddingHorizontal:4,
    paddingVertical:2,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:theme.border.radius,
    marginLeft:theme.spacings.xsmall
  },
  statusText:{
    color:theme.colors.white
  },
  content:{
    padding: theme.spacings.medium,
    backgroundColor: theme.colors.white,
    borderBottomLeftRadius:theme.border.radius,
    borderBottomRightRadius:theme.border.radius,
    paddingHorizontal:theme.spacings.xsmall,
    paddingVertical:theme.spacings.xsmall,
    ...theme.shadow.card,
  },
  gameInfo:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  teams:{
    flexDirection:'row',
    alignItems:'center',
  },
  teamImage:{
    height:50,
    width:50,
    marginRight:theme.spacings.xsmall
  },
  teamWrapper:{

    alignItems:'center',
    justifyContent:'center'
  }
});
