/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextProps } from "react-native"
import { useThemedColor } from "../hooks/useThemedColor";
import React from 'react'
export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'defaultSemiBold' | 'subtitle' | 'title' | 'small'
}

const ThemedText = ({
    style,
    lightColor,
    darkColor,
    type = 'default',
    ...rest
}: ThemedTextProps) => {
    const color = useThemedColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'small' ? styles.small : undefined,
                style,
            ]}
            {...rest}
        />
    )
}

export default ThemedText;

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'OpenSans-Regular'
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'OpenSans-SemiBold'
    },
    title: {
        fontSize: 32,
        lineHeight: 38,
        fontFamily: 'OpenSans-Bold'
    },
    subtitle: {
        fontSize: 24,
        lineHeight: 29,
        fontFamily: 'OpenSans-SemiBold'
    },
    small: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        lineHeight: 21,
    }
})