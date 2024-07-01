import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText';
import { Colors } from '../constants/Color';

interface AppButtonProp {
    type?: 'primary' | 'outline' | 'danger';
    onPress: () => void;
    label: string;
}
const AppButton: React.FC<AppButtonProp> = ({ type, onPress, label }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            activeOpacity={0.8}
        >
            <ThemedText type='subtitle' lightColor={'white'} darkColor='white'>
                {label}
            </ThemedText>
        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0098FF',
        width: '100%',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14
    }
})