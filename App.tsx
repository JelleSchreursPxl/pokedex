import { ThemeProvider } from 'react-native-rapi-ui';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';

// import { useTranslation, Trans } from 'react-i18next';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function App() {
  // const [ t, language ] = useState('en');
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const getTheme = async (key = "theme") => {
      try {
        const theme = await AsyncStorage.getItem(key);
        if (theme === 'dark') {
          setTheme('dark');
          
        } else {
          setTheme('light');
        }
      } catch(error) {
        console.log('error', error);
      };
    };
    getTheme();
  }, []);

  

  return (
    // @ts-ignore - TailwindProvider is not typed - missing type definition 
        <ThemeProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </ThemeProvider>
  );
}

