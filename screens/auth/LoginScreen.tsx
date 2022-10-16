
// import { View, Text, Button } from 'react-native'
// import React, { useState } from 'react'
// import { Input } from '@rneui/themed';


// import { auth } from './../../src/firebase';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const LoginScreen = () => {
//   const [signedIn, setSignedIn] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const signInUser = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         if(user) {
//           setSignedIn(true);
//         }
//         // ...
//       }
//       )
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       }
//       );
//   }

//   return (
//     <View>
//       <Input placeholder="Email" value={email} onChangeText={text =>setEmail(text)}/>
//       <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={text =>setPassword(text)}/>
//       <Button title="Login" onPress={() => signInUser()} />

//     </View>
//   )
// }

// export default LoginScreen