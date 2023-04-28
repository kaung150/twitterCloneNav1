import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
      <Text>Home Screen / Feed</Text>
      <Button title="New Tweet" onPress={()=> navigation.navigate('NewTweet') } />
      <Button title="Tweet Screen" onPress={()=> navigation.navigate('Tweet Screen') } />
      <Button title="Profile Screen" onPress={()=> navigation.navigate('Profile Screen') } />
    </View>
  )
}