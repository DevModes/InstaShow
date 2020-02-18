import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import HomePage from '../Screens/HomePage';

const Stack = createStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown : false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomePage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;