import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import plusIcon from '../../src/assests/plus-icon.png';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                tabStyle:
                    { backgroundColor: '#000' },
                activeTintColor: '#fff'
            }}>

            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name={'home'} size={24} color={color} />
                    ),
                    tabBarLabel: () => null,
                }}
            />

            <Tab.Screen
                name={'Search'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name={'search1'} size={24} color={color} />
                    ),
                    tabBarLabel: () => null,
                }}
            />

            <Tab.Screen
                name={'Post'}
                component={Home}
                options={{
                    tabBarIcon: ({ }) => (
                        <Image
                            source={plusIcon}
                            style={{ height: 30, resizeMode: 'contain' }} />
                    ),
                    tabBarLabel: () => null,
                }}
            />

            <Tab.Screen
                name={'Inbox'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'message-minus-outline'} size={24} color={color} />
                    ),
                    tabBarLabel: () => null,
                }}
            />

            <Tab.Screen
                name={'Profile'}
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={'person-outline'} size={24} color={color} />
                    ),
                    tabBarLabel: () => null,
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeBottomTabNavigator;