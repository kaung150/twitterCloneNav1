import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NewTweet from './screens/NewTweet';
import ProfileScreen from './screens/ProfileScreen';
import TweetScreen from './screens/TweetScreen';
import SettingScreen from './screens/SettingScreen';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationsScreen';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const HomeStackNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{headerShown: true, headerBackTitleVisible: false}}
    >
      {/* <Stack.Screen name="Home1" component={HomeScreen} /> */}
      <Stack.Screen name="Tab" component={TabNavigator} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="NewTweet" component={NewTweet} options={{
        title: ''
      }} />
      <Stack.Screen name="Tweet Screen" component={TweetScreen} options={{
        title: ''
      }}/>
      <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{
        title: ''
      }}/>
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false
    }}
    >
      <Tab.Screen name="Home1" component={HomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-home-outline" size={size} color={color} />
          )
        }}
      
      />
      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" size={size} color={color} />
          )
        }}
      
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          )
        }}
      
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
   <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'
        screenOptions={{
          headerShown: true,
        }}
      
      >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Settings" component={SettingScreen} />      
      </Drawer.Navigator>
   </NavigationContainer>
  );
}
