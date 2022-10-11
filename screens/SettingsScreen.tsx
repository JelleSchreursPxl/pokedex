import { SafeAreaView, Text, View } from 'react-native'
import React, { useState }from 'react'
import { useTheme } from 'react-native-rapi-ui';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { Switch } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist';
import { useTranslation, Trans } from 'react-i18next';

const SettingsScreen = () => {
  const tw = useTailwind();
  const { t, i18n } = useTranslation();
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

  const setLanguage = async (language: string) => {
    try {
      await AsyncStorage.setItem('language', language);
      i18n.changeLanguage(language);
    } catch(error) {
      console.log('error', error);
    };
  };

  return (
    <SafeAreaView>
      <View style={tw("flex flex-col m-4")}>
        <Text style={{fontSize: 32, fontWeight:"700", marginBottom: 16}}>Settings</Text>
        <View style={tw(`flex flex-row items-center my-6`)}>
          <Switch onValueChange={handleTheme} value={isEnabled}/>
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: 16}}>
            Dark Mode
          </Text>
        </View>
        <View style={tw(`flex flex-row items-center mt-6`)}>
          <View style={tw(`flex flex-col`)}>
          <Text style={{fontSize: 24, fontWeight: "700" }}>
            Language
          </Text>
          <View style={tw(`flex flex-row items-center my-6`)}>
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
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SettingsScreen