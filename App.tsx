import 'react-native-gesture-handler';
import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/routes/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
        <Tabs/>
    </NavigationContainer>
  )
}

export default App;
