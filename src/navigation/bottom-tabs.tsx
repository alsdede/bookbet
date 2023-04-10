
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from '_navigation/home-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import BetHistory from '_screens/bet-history';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return   (
    <NavigationContainer>
      <Tab.Navigator   screenOptions={{
        headerShown: false,
      }}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Histórico" component={BetHistory} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
