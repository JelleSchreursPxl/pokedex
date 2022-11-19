import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { useState }from 'react'
import { useTheme } from 'react-native-rapi-ui';
import { settings } from '../styles/settings';

import {
  Switch
} from 'react-native-paper';
import Strings from '../constants/Strings';
import { auth } from '../database/firebase';


const SettingsScreen = () => {
  const { setTheme } = useTheme();
  const [isDarkmode, setIsDarkmode] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsDarkmode(isDarkmode => !isDarkmode);
    setTheme(isDarkmode ? 'light' : 'dark');
  }
  const setDarkMode = () => {
    isDarkmode ? setTheme('light') : setTheme('dark');
  };

  const handleTheme = () => {
    setDarkMode();
    toggleSwitch();
  };

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out!');
      })
      .catch((error: { message: any; }) => alert(error.message))
  }

  return (
    <SafeAreaView style={[settings.view, {backgroundColor: isDarkmode ? 'black' : 'white'}]}>
      <View style={settings.container}>
        <Text style={[settings.title, {color: isDarkmode ? 'white' : 'black'}]}>
          {Strings.settingsScreen.title}
          </Text>
        <View style={settings.switchContainer}>
          <Switch onValueChange={handleTheme} value={isDarkmode}/>
          <Text style={[settings.switchText, {color: isDarkmode ? 'white' : 'black'}]}>
            {Strings.settingsScreen.darkMode}
          </Text>
        </View>
      </View>
      <View style={settings.logout}>
          <TouchableOpacity
            onPress={handleSignOut}
            style={settings.button}>
          <Text style={settings.buttonText}>{Strings.settingsScreen.signOut}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen
