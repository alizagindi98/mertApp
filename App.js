import 'react-native-gesture-handler';
import React, { useEffect, useState, Button } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegistrationScreen } from './src/screens'
import { ProfileScreen, UploadScreen } from './src/screens';
import TabNavigation from './src/navigation/TabNavigator'
import { AntDesign } from '@expo/vector-icons';
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import { firebase } from './src/firebase/config'

const Stack = createStackNavigator();

export default function App() {
  if (loading) {
    return (
      <></>
    )
  }
  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name={"root" }>
            {props => <TabNavigation {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
