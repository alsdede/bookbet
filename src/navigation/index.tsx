import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './bottom-tabs';

const Navigation = () => {
  return <NavigationContainer>
    <BottomTabs/>
  </NavigationContainer>;
};

export default Navigation;
