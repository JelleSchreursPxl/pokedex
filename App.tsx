import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import { NavigationContainer, useTheme } from '@react-navigation/native';


import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

