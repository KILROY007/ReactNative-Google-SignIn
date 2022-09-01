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

GoogleSignin.configure({
  webClientId:
    '161714772132-olqa1hg8eem2kl000heic9nhng8ccng6.apps.googleusercontent.com',
});

// create a component
const App = () => {
  const googleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('====================================');
      console.log('User Info', userInfo);
      console.log('====================================');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
        console.log('====================================');
        console.log('====================================');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
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
