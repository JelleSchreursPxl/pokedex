
import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import Strings from '../../constants/Strings';
import { auth } from '../../database/firebase';

import { loginscreen } from '../../styles/loginscreen';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any; }) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch((error: { message: any; }) => alert(error.message))
  }

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials: { user: any; }) => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch((error: { message: any; }) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={loginscreen.container}
      behavior="padding"
    >
      <Image source={require('../../assets/pokedex.png')} style={loginscreen.image} />
        <View style={loginscreen.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={loginscreen.input} />
        </View>
        <View style={loginscreen.inputContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={loginscreen.input}
            secureTextEntry />
        </View>

      <View style={loginscreen.buttonContainer}>
        <TouchableOpacity
          onPress={login}
          style={loginscreen.button}
        >
          <Text style={loginscreen.buttonText}>{Strings.loginScreen.login}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={signUp}
          style={[loginscreen.button, loginscreen.buttonOutline]}
        >
          <Text style={loginscreen.buttonOutlineText}>{Strings.loginScreen.register}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen
