/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import ThemedView from './ThemedView'
import ThemedText from './ThemedText';
import { Comman } from '../utility/Styles';
import { useThemedColor } from '../hooks/useThemedColor';
import { FieldError } from 'react-hook-form';
import { Colors } from '../constants/Color';

type ThemedInputFieldProp = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
    onChange: (val: string) => void;
    onBlur?: (val: string) => void;
    label?: string;
    error?: FieldError;
}

const ThemedInputField = ({
    label,
    lightColor,
    darkColor,
    secureTextEntry,
    inputMode,
    onChange,
    onBlur,
    error,
    placeholder,
}: ThemedInputFieldProp) => {
    const color = useThemedColor({ light: lightColor, dark: darkColor }, 'text');
    const placeholderColor = useThemedColor({}, 'icon')
    return (
        <ThemedView style={{ marginBottom: 18 }}>
            {
                label && (
                    <ThemedText>{label}</ThemedText>
                )
            }
            <View style={[Comman.inRow, styles.container, { borderColor: color }, error && { borderColor: '#ff0033' }]}>
                <TextInput
                    placeholder={placeholder}
                    style={[styles.input, { color: color },]}
                    placeholderTextColor={placeholderColor}
                    secureTextEntry={secureTextEntry}
                    inputMode={inputMode}
                    onChangeText={onChange}
                    onBlur={onBlur}
                />
            </View>
            {
                error && (
                    <ThemedText
                        style={styles.errorMessage}
                        type='small'
                    >
                        {error.message}
                    </ThemedText>
                )
            }
        </ThemedView>
    )
}

export default ThemedInputField

const styles = StyleSheet.create({
    container: {
        padding: 8,
        paddingHorizontal: 10,
        borderRadius: 6,
        borderWidth: 0.8,
        width: '100%',
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'OpenSans-Regular',
        padding: 0,
    },
    errorMessage: {
        marginLeft: 2,
        marginTop: 2,
        color: '#ff0033'
    }
})