import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState }from 'react'
import { useTheme } from 'react-native-rapi-ui';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

import {
  Switch
} from 'react-native-paper';


const SettingsScreen = () => {
  const { setTheme } = useTheme();
  const [isEnabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled(previousState => !previousState);


  const setDarkMode = async () => {
    try {
      if (isEnabled) {
        await AsyncStorage.setItem('theme', 'light');
        setTheme('light');
      } else {
        await AsyncStorage.setItem('theme', 'dark');
        setTheme('dark');
      }
    } catch(error) {
      console.log('error', error);
    };
  };

  const handleTheme = () => {
    setDarkMode();
    toggleSwitch();
  };

  return (
    <SafeAreaView>
      <View style={{display: 'flex', flexDirection: 'column', margin: 16, width: '100%'}}>
        <Text style={{fontSize: 32, fontWeight:"700", marginBottom: 16}}>Settings</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center' ,marginVertical: 24}}>
          <Switch onValueChange={handleTheme} value={isEnabled}/>
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 16}}>
            Dark Mode
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <TouchableOpacity 
          // onPress={handleSignOut}
          style={{ width: '60%', backgroundColor: '#000', paddingVertical: 16, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 16, fontWeight: "700", color: '#fff'}}>
              Logout
            </Text>
          </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default SettingsScreen