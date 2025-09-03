import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, View } from 'react-native';
import { globalStyles } from '../styles/global-styles';

const RootLayout = () => {
  

  const isAndroid = Platform.OS ==='android';

  if(isAndroid){
    NavigationBar.setBackgroundColorAsync('black');
  }
  
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