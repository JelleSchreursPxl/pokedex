import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigator from './navigation/RootNavigator';
import AuthNavigator from './navigation/AuthNavigator';

import { auth } from './database/firebase';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) =>{
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    })
    return unsubscribe
  }, [])


  const render = () => {
    if (isAuthenticated) {
      return <RootNavigator />;
    } else {
      return <AuthNavigator />;
    }
  };

  return (
    <ThemeProvider>
        <NavigationContainer>{render()}</NavigationContainer>
    </ThemeProvider>
  );
}

