import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import DriverIDScreen from './app/screens/DriverIDScreen';
import StudentIDScreen from './app/screens/StudentIDScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DriverIDScreen" component={DriverIDScreen} />
        <Stack.Screen name="StudentIDScreen" component={StudentIDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


