import { SafeAreaView, View, Image, Text, useColorScheme, ScrollView} from 'react-native'
import React from 'react'
import { homescreen } from '../styles/homescreen'
import { useTheme } from 'react-native-rapi-ui';
import { auth } from '../database/firebase';
import Strings from '../constants/Strings';

const HomeScreen = () => {
  const { isDarkmode } = useTheme();
  const userEmail = auth.currentUser?.email;

  const userName = userEmail?.split('@')[0];

  return (
    <SafeAreaView style={[homescreen.container, {backgroundColor: isDarkmode ? 'black' : 'white'} ]}>
      <View style={homescreen.screen} >
        <Image source={require('../assets/pokedex.png')} style={homescreen.logo} />
        <Text style={[homescreen.welcome, {color: isDarkmode ? 'white' : 'black'}]}>{Strings.homeScreen.welcome}</Text>
        <Text style={[homescreen.user,{color: isDarkmode ? 'white' : 'black'}]}>{userName}</Text>
        <ScrollView style={homescreen.info}>
          <Image source={require('../assets/pokemon.jpg')} style={homescreen.pokemonNews} />
          <Text style={[homescreen.subtitle, ,{color: isDarkmode ? 'white' : 'black'}]}>{Strings.homeScreen.subtitle}</Text>
          <Text style={[homescreen.text,{color: isDarkmode ? 'white' : 'black'}]}>{Strings.homeScreen.text}</Text>
        </ScrollView>
      </View>


    </SafeAreaView>
  )
}

export default HomeScreen
