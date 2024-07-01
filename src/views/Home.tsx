import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES } from '../utility/routs';
import Login from './Login';

const Home = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={ROUTES.login} component={Login} />
        </Stack.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})