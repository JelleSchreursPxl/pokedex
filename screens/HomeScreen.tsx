import { SafeAreaView, Button, Image, Text, useColorScheme} from 'react-native'
import React from 'react'
import { homescreen } from '../styles/homescreen'
import { useTheme } from 'react-native-rapi-ui';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const { isDarkmode } = useTheme();

  return (
    <SafeAreaView style={[homescreen.container, {backgroundColor: isDarkmode ? 'black' : 'white'} ]}>
      <Image source={require('../assets/logo.png')} style={homescreen.logo} />
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen
