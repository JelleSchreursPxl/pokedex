import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();
export type AuthStackParamList = {
  Login: undefined,
  Register: undefined
}

const AuthNavigator = () => {
  return(
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      </Stack.Navigator>
  );
}

export default AuthNavigator