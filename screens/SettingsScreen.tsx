import { SafeAreaView, Text, View } from 'react-native'
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
      <View style={{display: 'flex', flexDirection: 'column', margin: 16}}>
        <Text style={{fontSize: 32, fontWeight:"700", marginBottom: 16}}>Settings</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center' ,marginVertical: 24}}>
          <Switch onValueChange={handleTheme} value={isEnabled}/>
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 16}}>
            Dark Mode
          </Text>
        </View>
        
        {/* <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center' , marginTop: 24}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={{fontSize: 24, fontWeight: "700" }}>
            Language
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center' ,marginVertical: 24}}>
            <Switch value={i18n.language === 'en'}/>
            <Text style={{fontSize: 18, fontWeight: "500", marginHorizontal: 16}}>
              EN
            </Text>
            <Switch value={i18n.language === 'nl'}/>
            <Text style={{fontSize: 18, fontWeight: "500", marginHorizontal: 16}}>
              NL
            </Text>
            </View>
          </View>   
        </View> */}
        
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen