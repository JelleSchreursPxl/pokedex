import { SafeAreaView, Button, Image, FlatList} from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Image source={require('../assets/logo.png')} style={{width: 80, height: 80 }} />
      {/* <Text style={tw("font-bold text-3xl")}>Pokedex</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen
