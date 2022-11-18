import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { useState }from 'react'
import { Icon } from '@rneui/themed';
import { useTheme } from 'react-native-rapi-ui';
import {useNavigation} from '@react-navigation/native';

import { settings } from '../styles/settings';

import {
  Switch
} from 'react-native-paper';
import Strings from '../constants/Strings';
import { auth } from '../database/firebase';

const SettingsScreen = () => {
  const navigation = useNavigation();
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
    auth
      .signOut()
      .then(() => {
        // navigation.replace("Login")
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
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.button}
        >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})