// import { View, Button, KeyboardAvoidingView } from 'react-native'
// import React, { useState } from 'react';
// import { Input } from '@rneui/themed';

// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// const auth = getAuth();

// const RegisterScreen = () => {
//   const [signedIn, setSignedIn] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const registerUser = () => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         if(user) {
//           setSignedIn(true);
//         }
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//       }
//     );
//   }

//   return (
//     <KeyboardAvoidingView>
//       <Input placeholder="Email" value={email} onChangeText={text =>setEmail(text)}/>
//       <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={text =>setPassword(text)}/>
//       <Button title="Register" onPress={() => registerUser()} />
//     </KeyboardAvoidingView>
//   )
// }

// export default RegisterScreen