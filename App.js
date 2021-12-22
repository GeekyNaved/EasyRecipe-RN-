import React, {useEffect} from 'react';
// import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackScreen from './Tabs/HomeStackScreen';
import SettingsScreen from './Tabs/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
const Tab = createBottomTabNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'About us') {
              iconName = focused ? 'information-circle' : 'information-circle';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // tabBarIcon: ({focused, color, size}) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = focused ? 'home' : 'home';
          //   } else if (route.name === 'About us') {
          //     iconName = focused ? 'user-alt' : 'user-alt';
          //   }
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
        })}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="About us" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// // import type {Node} from 'react';
// import {StatusBar, StyleSheet, Text} from 'react-native';

// const App = () => {
//   return (
//     <>
//       <StatusBar backgroundColor="green" />
//       <Text>Hello naved</Text>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
