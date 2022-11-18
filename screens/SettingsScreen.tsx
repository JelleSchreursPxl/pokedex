import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState }from 'react'
import { Icon } from '@rneui/themed';
import { useTheme } from 'react-native-rapi-ui';
import {useNavigation} from '@react-navigation/native';

import { settings } from '../styles/settings';
import  CameraView  from '../components/CameraView';

import {
  Switch
} from 'react-native-paper';
import Strings from '../constants/Strings';

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
    </SafeAreaView>
  )
}

export default SettingsScreen