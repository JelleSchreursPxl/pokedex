import { SafeAreaView, Button, Image, Text} from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-rapi-ui'

const HomeScreen = () => {
  const { isDarkmode, setTheme } = useTheme()
  const handleTheme = () => {
    setTheme(isDarkmode ? 'light' : 'dark')
  }

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Image source={require('../assets/logo.png')} style={{width: 80, height: 80 }} />
      {/* <Text>Email: {auth.currentUser?.email}</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen
