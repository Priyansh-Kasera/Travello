import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { useThemedColor } from '../hooks/useThemedColor';

export type ThemedViewProp = ViewProps & {
    lightColor?: string;
    darkColor?: string;
}

const ThemedView = ({ lightColor, darkColor, style, ...otherProps }: ThemedViewProp) => {
    const backgroundColor = useThemedColor({ light: lightColor, dark: darkColor }, 'background')
    return (
        <View style={[{ backgroundColor }, style]} {...otherProps} />
    )
}

export default ThemedView

const styles = StyleSheet.create({})