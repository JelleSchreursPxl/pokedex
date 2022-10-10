import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

// import screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

// Typescript definition types for TabNavigator
export type TabParamList = {
  Home: undefined,
  Search: undefined,
  Favorites: undefined
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <Tab.Navigator screenOptions={( { route } ) => ({
      tabBarActiveColor: '#E4000F',
      tabBarInactiveColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopWidth: 0,
        elevation: 0,
        margin: 4,
      },
      tabBarIcon: ({ focused, size, color }) => {
        if (route.name === 'Home') {
          return <Icon name="home" type="font-awesome-5" size={size} color={focused ? "#E4000F": "gray"} />
        } else if (route.name === 'Search') {
          return <Icon name="search" type="font-awesome-5" size={size} color={focused ? "#E4000F": "gray"} />
        } else if (route.name === 'Favorites') {
          return <Icon name="heart" type="font-awesome-5" size={size} color={focused ? "#E4000F": "gray"}/>
        }
      }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator