import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddButton from '../components/NavComponents/AddButton';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen/MovieScreen';
import PersonScreen from '../screens/PersonScreen/PersonScreen';

export const MainStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="book-medical" size={24} color="#FF0000" />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="book-medical" size={24} color="#FF0000" />
            ),
          }}
          name="Movies"
          component={MoviesScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <AddButton />,
          }}
          name="Add"
          component={() => null}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="book-medical" size={24} color="#FF0000" />
            ),
          }}
          name="Person"
          component={PersonScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

  // const Stack = createStackNavigator();

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator
  //       screenOptions={{animationTypeForReplace: 'push'}}
  //       initialRouteName="Home"
  //       headerMode="none">
  //       <Stack.Screen name="Home" component={HomeScreen} />
  //       <Stack.Screen name="Movies" component={MoviesScreen} />
  //       <Stack.Screen name="Person" component={PersonScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};
