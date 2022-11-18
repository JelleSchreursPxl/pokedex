import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { useTheme } from 'react-native-rapi-ui';

// import screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CameraView from '../components/CameraView';

// Typescript definition types for TabNavigator
export type TabParamList = {
  Home: undefined,
  Search: undefined,
  Favorites: undefined
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();
  const { isDarkmode } = useTheme();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <Tab.Navigator screenOptions={( { route } ) => ({
      tabBarInactiveColor: 'gray',
      tabBarStyle: {
        backgroundColor: isDarkmode ? '#121212' : '#F9F9F9',
        height: 60,
        borderTopWidth: 0,
        paddingBottom: 8,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        color: isDarkmode ? 'white' : 'black'
      },

      tabBarIcon: ({ focused, size }) => {
        if (route.name === 'Home') {
          return <Icon name="home" type="font-awesome-5" size={size} color={focused ? isDarkmode ? "white": "black" : 'gray'} />
        } else if (route.name === 'Search') {
          return <Icon name="search" type="font-awesome-5" size={size} color={focused ? isDarkmode ? "white": "black" : 'gray'} />
        } else if (route.name === 'Settings') {
          return <Icon name="cog" type="font-awesome-5" size={size} color={focused ? isDarkmode ?  "white": "black" : 'grey'}/>
        } else if (route.name === 'Camera') {
          return <Icon name="camera" type="font-awesome-5" size={size} color={focused ? isDarkmode ?  "white": "black" : 'grey'}/>
        }
      }
    })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Camera" component={CameraView} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator