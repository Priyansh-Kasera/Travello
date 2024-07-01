import { StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/views/Home'
import { useThemedColor } from './src/hooks/useThemedColor'

const App = () => {
  const backgroundColor = useThemedColor({}, 'background')
  const theme = useColorScheme() ?? 'light';
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <Home />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})