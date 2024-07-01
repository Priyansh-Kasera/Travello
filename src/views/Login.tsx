/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Comman } from '../utility/Styles'
import ThemedInputField from '../components/ThemedInputField'
import { Controller, useForm } from 'react-hook-form'
import { Regex } from '../constants/Regex'
import AppButton from '../components/AppButton'
import { useThemedColor } from '../hooks/useThemedColor'

export type LoginField = {
    email: string;
    password: string;
    phoneNumber: string;
}

const Login = () => {
    const form = useForm<LoginField>();
    const [signUpActive, setSignUpActive] = useState(false)
    const { handleSubmit, control, setFocus, formState: { errors } } = form
    const borderColor = useThemedColor({}, 'text')
    const backgroundColor = useThemedColor({}, 'background')
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <SafeAreaView style={Comman.safeArea}>

            <ThemedView style={[Comman.container]}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.center}
                >
                    <View style={[styles.imageContainer]}>
                        <Image
                            source={require('../assets/images/login.png')}
                            style={Comman.image}
                        />
                    </View>
                    <ThemedText type='title' style={styles.headingText}>
                        Welcome Back!
                    </ThemedText>
                    <Controller
                        control={control}
                        name='email'
                        rules={{
                            required: {
                                value: true,
                                message: 'Enter email address.'
                            },
                            pattern: {
                                value: Regex.email,
                                message: 'Enter a valid email address'
                            }
                        }}
                        render={({ field: { value, onBlur, onChange } }) => (
                            <ThemedInputField
                                placeholder='Enter Email'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={errors.email}
                            />
                        )}
                    />
                    {
                        signUpActive && (
                            <Controller
                                control={control}
                                name='phoneNumber'
                                rules={{
                                    required: {
                                        value: signUpActive,
                                        message: 'Enter your phone number'
                                    },
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: 'Enter a valid phone number'
                                    }
                                }}
                                render={({ field: { value, onBlur, onChange } }) => (
                                    <ThemedInputField
                                        placeholder='Enter Phone Number'
                                        value={value}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        error={errors.phoneNumber}
                                        inputMode='numeric'
                                        maxLength={10}

                                    />
                                )}
                            />
                        )
                    }

                    <Controller
                        control={control}
                        name='password'
                        rules={{
                            required: {
                                value: true,
                                message: 'Enter password'
                            },
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long.'
                            }
                        }}
                        render={({ field: { value, onBlur, onChange } }) => (
                            <ThemedInputField
                                placeholder='Enter Password'
                                secureTextEntry
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={errors.password}
                            />
                        )}
                    />

                    <ThemedText style={styles.forgotPassword}>Forgot Password?</ThemedText>

                    <AppButton
                        label={signUpActive ? 'Sgin Up' : 'Login'}
                        onPress={handleSubmit(onSubmit)}
                    />
                    <View style={[styles.seprator, { backgroundColor: borderColor }]}>
                        <ThemedText style={[styles.absText, { backgroundColor }]}>OR</ThemedText>
                    </View>
                    <View style={[Comman.inRow, { gap: 30, marginTop: 32 }]}>
                        <TouchableOpacity style={[styles.bottomIcon, { borderColor: borderColor }]}>
                            <Image
                                source={require('../assets/images/facebook.png')}
                                style={Comman.image}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.bottomIcon, { borderColor: borderColor }]}>
                            <Image
                                source={require('../assets/images/google.png')}
                                style={Comman.image}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => setSignUpActive((prev) => (!prev))}
                    >
                        {
                            signUpActive ? (
                                <ThemedText style={styles.signUpText}>Already have an account? <ThemedText type='defaultSemiBold'>Login</ThemedText></ThemedText>
                            ) : (
                                <ThemedText style={styles.signUpText}>Don't have an account? <ThemedText type='defaultSemiBold'> SignUp</ThemedText></ThemedText>

                            )
                        }
                    </TouchableOpacity>
                </ScrollView>
            </ThemedView>
        </SafeAreaView>

    )
}

export default Login

const styles = StyleSheet.create({
    center: {
        alignItems: 'center'
    },
    imageContainer: {
        width: 180,
        aspectRatio: 1 / 1,
        marginBottom: 18
    },
    headingText: {
        marginBottom: 24,
    },
    forgotPassword: {
        marginLeft: 'auto',
        marginBottom: 24
    },
    seprator: {
        height: 0.5,
        marginTop: 32,
        backgroundColor: 'red',
        width: '100%',
        position: 'relative'
    },
    absText: {
        position: 'absolute',
        width: 50,
        textAlign: 'center',
        top: -12,
        alignSelf: 'center',
    },
    bottomIcon: {
        width: 50,
        aspectRatio: 1 / 1,
        borderWidth: 1,
        padding: 5,
        borderRadius: 8,
    },
    signUpText: {
        marginTop: 32,
        textDecorationLine: 'underline'
    }
})