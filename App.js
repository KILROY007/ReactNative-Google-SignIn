//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '161714772132-olqa1hg8eem2kl000heic9nhng8ccng6.apps.googleusercontent.com',
});

// create a component
const App = () => {
  const googleSignin = async () => {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    console.log(res);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <TouchableOpacity style={styles.btn} onPress={googleSignin}>
        <Text style={styles.btnText}> Google Sign-In</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btnText: {
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 5,
  },
});

//make this component available to the app
export default App;
