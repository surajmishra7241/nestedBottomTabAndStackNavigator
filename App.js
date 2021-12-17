import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
const Tab=createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
       
         <Tab.Navigator>
            <Tab.Screen name='search' component={Search}/>
             <Tab.Screen name='post' component={Search}/>
              <Tab.Screen name='setting' component={Search}/>
            
        </Tab.Navigator> 
        
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
