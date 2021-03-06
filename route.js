import * as React from 'react';
import HomeScreen from './navigation/screens/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}