import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import DriverIDScreen from './app/screens/DriverIDScreen';
import StudentIDScreen from './app/screens/StudentIDScreen';
import EditProfileScreen from './app/screens/EditProfileScreen';
import SettingsScreen from './app/screens/SettingsScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DriverIDScreen" component={DriverIDScreen} />
        <Stack.Screen name="StudentIDScreen" component={StudentIDScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


