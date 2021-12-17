import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Search from './Search';
import Details from './Details';
const Stack=createNativeStackNavigator();

const Home = ({navigation}) => {
    return (
       
       
        <View style={styles.container}>
        <Text>Home Screen</Text>
           <Button title='Press' onPress={()=>navigation.navigate('details')}/>
        </View>
    )

}

export default Home

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'green',
    }
})
