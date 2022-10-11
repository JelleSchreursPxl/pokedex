import { SafeAreaView, Button, Image, FlatList} from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'

const HomeScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView style={[tw("flex-1 items-center justify-center")]}>
      <Image source={require('../assets/logo.png')} style={tw("w-20 h-20")} />
      {/* <Text style={tw("font-bold text-3xl")}>Pokedex</Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen
