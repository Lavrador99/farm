import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MoviesScreen from '../screens/MoviesScreen/MovieScreen';

export const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{animationTypeForReplace: 'push'}}
        initialRouteName="Home"
        headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
