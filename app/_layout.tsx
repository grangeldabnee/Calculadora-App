import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles/global-styles';

const RootLayout = () => {
  
  const [loaded] = useFonts({
    SpaceMono:require('../assets/fonts/SpaceMono-Regular.ttf')
  })
  if(!loaded){
    return null
  }

  return (
    <View style={globalStyles.Background}>
      <Slot/>

      <StatusBar style='light'/>
    </View>
  )
}

export default RootLayout