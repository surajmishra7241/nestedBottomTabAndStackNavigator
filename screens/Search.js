import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Details from './Details'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createDrawerNavigator,DrawerItems} from 'react-navigation-drawer';
//import {createDrawerNavigator} from 'react-navigation-drawer';
const Stack=createNativeStackNavigator();
//const Drawer = createDrawerNavigator();
const Search = () => {
    return (
         
<Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='details' component={Details}/>
      </Stack.Navigator>
      
    )
}

export default Search

const styles = StyleSheet.create({})
