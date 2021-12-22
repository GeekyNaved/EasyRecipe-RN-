import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Recipe from '../Screens/Recipe';
import Ingredients from '../Screens/Ingredients';
const HomeStack = createNativeStackNavigator();
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerS>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Ingredients"
        component={Ingredients}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <HomeStack.Screen
        name="Recipe"
        component={Recipe}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
