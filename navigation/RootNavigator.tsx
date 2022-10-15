import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { firebase } from '../firebase'

// auth screens
// import LoginScreen  from '../screens/auth/LoginScreen'
// import RegisterScreen  from '../screens/auth/RegisterScreen' 

// app navigation
import TabNavigator from './TabNavigator';
import PokemonScreen from '../screens/PokemonScreen';
import { useColorScheme } from 'react-native';

export type RootStackParamList = {
  Main: undefined,
  PokemonModal: { id: number }
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
// const AuthStack = createNativeStackNavigator();

const RootNavigator = () => {
   const isDarkMode = useColorScheme() === 'dark';

    return (
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="Main" component={TabNavigator} />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="PokemonModal" component={PokemonScreen} options={{ headerShown: false }} />
        </RootStack.Group>
      </RootStack.Navigator>
    );
}

export default RootNavigator