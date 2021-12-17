import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const Details = ({navigation}) => {
    return (
       
        <View style={styles.container}>
            <Text>Details</Text>
            <Button title='Press' onPress={()=>navigation.navigate('home')}/>
        </View>
       
    )
}

export default Details

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'red',
    }
})
