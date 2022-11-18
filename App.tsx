import React from 'react';
import { ThemeProvider } from 'react-native-rapi-ui';
import { NavigationContainer, useTheme } from '@react-navigation/native';

import RootNavigator from './navigation/RootNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import firebase from 'firebase';

export default function App() {
  const user = firebase.auth().currentUser;

  const render = () => {
    if (user) {
      return <RootNavigator />;
    } else {
      return <AuthNavigator />;
    }
  };

  return (
    <ThemeProvider>
        {render()}
    </ThemeProvider>
  );
}

