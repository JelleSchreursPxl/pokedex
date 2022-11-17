import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState }from 'react'
import { useTheme } from 'react-native-rapi-ui';

// Camera 


import { auth } from '../src/firebase';
import { signOut } from 'firebase/auth';

import { settings } from '../styles/settings';

import {
  Switch
} from 'react-native-paper';
import Strings from '../constants/Strings';

const SettingsScreen = ( navigation : any ) => {
  const { setTheme } = useTheme();
  const [isDarkmode, setIsDarkmode] = useState<boolean>(false);
  const [signedIn, setSignedIn] = useState(true);

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
      <View style={settings.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Text>{Strings.settingsScreen.camera}</Text>
        </TouchableOpacity>
      </View>
      <View style={settings.logout}>
        {/* <TouchableOpacity 
          // onPress={() => signOutUser}
          style={[settings.logoutButton, {backgroundColor: isDarkmode ? 'white' : 'black'}]}>
            <Text style={[settings.logoutText, {color: isDarkmode ? 'black' : 'white'}]}>
              {Strings.settingsScreen.logout}
            </Text>
          </TouchableOpacity> */}
      </View>

    </SafeAreaView>
  )
}

export default SettingsScreen