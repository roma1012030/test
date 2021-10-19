import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import LoopScreen from '../screens/LoopScreen'
import UserScreen from '../screens/UserScreen'
import ShopScreen from '../screens/ShopScreen'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    
                }
            }}
         >
            <Tab.Screen name ="Name" component={HomeScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('../assets/icon/Home.png')}
                            resizeMod='contain'
                            style={{
                                width: 20,
                                height: 24,
                                tintColor: focused ? '#4773C8' : '#4773C8'
                            }}
                         />
                        <Text>Главная</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name ="Shop" component={ShopScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('../assets/icon/Shop.png')}
                            resizeMod='contain'
                            style={{
                                width: 27,
                                height: 24,
                                tintColor: focused ? '#4773C8' : '#4773C8'
                            }}
                         />
                        <Text>Корзина</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name ="Loop" component={LoopScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('../assets/icon/Loop.png')}
                            resizeMod='contain'
                            style={{
                                width: 23,
                                height: 24,
                                tintColor: focused ? '#4773C8' : '#4773C8'
                            }}
                         />
                        <Text>Поиск</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name ="User" component={UserScreen} options={{
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('../assets/icon/User.png')}
                            resizeMod='contain'
                            style={{
                                width: 21,
                                height: 24,
                                tintColor: focused ? '#4773C8' : '#4773C8'
                            }}
                         />
                        <Text>Профиль</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    )
}

export default Tabs