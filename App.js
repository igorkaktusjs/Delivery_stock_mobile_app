import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons'; 
import { Provider } from 'react-redux'
import store from './store/store'


import StockManagement from './screens/StockManagement';
import OrderHistory from './screens/OrderHistory';
import Reports from './screens/Reports';
import IconButton from './components/UI/UI/IconButton';
import StockSwitch from './components/UI/UI/StockSwitch';


import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const IconButtonHandel = () => {
  return console.log('press');
}

export default function App() {
  return (
    <>
    <StatusBar style="light"  /> 
    <Provider store={store}>
    
    <NavigationContainer>
    <Tab.Navigator screenOptions={
      {title: 'Stock Management',
          headerStyle: {backgroundColor: '#0a4d44'},
          headerTintColor: 'white',
          tabBarActiveTintColor: {backgroundColor: '#0a4d44'},
          tabBarLabelStyle: {fontSize: 10},
        }
    }>
      <Tab.Screen 
        name="Home" 
        component={StockManagement}
        options={{
          tabBarIcon: () => (
             <MaterialCommunityIcons name="food-fork-drink" size={28} color="#0a4d44" />
          ),
          title: 'Stock Management',
          headerStyle: {backgroundColor: '#0a4d44'},
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'F2F1F1'
          },
          headerRight: () => {
            return <IconButton onPress={IconButtonHandel}/>
          },
          headerLeftContainerStyle: {
            flex:1,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 4

          },
          headerLeft: () => {
            return <StockSwitch name='In Stock'/>
          },
          
        }} 
        />

      <Tab.Screen 
        name="Order" 
        component={OrderHistory}
        options={{
          tabBarIcon: () => (
          <Octicons name="history" size={24} color="#0a4d44" />   
         ),
          title: 'Order History',
          headerStyle: {backgroundColor: '#0a4d44'},
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'F2F1F1'
          }
        }}
         />
      <Tab.Screen 
        name="Reports" 
        component={Reports} 
        options={{
          tabBarIcon: () => (
          <Octicons name="report" size={24} color="#0a4d44" />      
           ),
          title: 'Reports',
        }}
        /> 
    </Tab.Navigator>
    </NavigationContainer>  
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  }
});
