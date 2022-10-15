import { ThemeProvider } from 'react-native-rapi-ui';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';

import RootNavigator from './navigation/RootNavigator';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {

  return (
        <ThemeProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
  );
}

