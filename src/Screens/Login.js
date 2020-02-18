import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, } from 'react-native'
import { Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { ButtonthemeColor, ButtonthemeText } from '../common/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const loginSuccess = () => {
        if (!value.email) {
            Toast.show({
                text: "Please Enter Email",
                buttonText: "Okay",
                duration: 3000
            })
        }
        else if (!value.password) {
            Toast.show({
                text: "Please Enter Password",
                buttonText: "Okay",
                duration: 3000
            })
        }
        else if (value.email === 'admin' && value.password === 'admin') {
            Toast.show({
                text: "Login Success",
                buttonText: "Okay",
                duration: 3000
            })
            props.navigation.navigate('Home')
        }
        else {
            Toast.show({
                text: "Login Error",
                buttonText: "Okay",
                duration: 3000
            })
        }

    }
    const SignupPage = () => {
        props.navigation.navigate('Signup')
    }
    return (
        <SafeAreaView style={styles.MainConatiner}>
            <Content>
                <View style={styles.LoginTextContainer}>
                    <Text style={styles.LoginText}>Log In</Text>
                </View>
                <Form style={styles.FormContainer}>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input autoCapitalize='none' value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input autoCapitalize='none' secureTextEntry={true} value={value.password} onChangeText={(text) => setValue({ ...value, password: text })} />
                    </Item>
                    <View style={styles.ForgotPasswordContainer}>
                        <TouchableOpacity>
                            <Text>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <Button style={styles.ButtonStyle} block onPress={loginSuccess}>
                        <Text style={styles.LogintextColor}>Login </Text>
                    </Button>
                </Form>
            </Content>
            <View style={styles.SignupConatiner}>
                <TouchableOpacity onPress={SignupPage}>
                    <Text>Sign up for an account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    MainConatiner: { flex: 1, },
    LoginTextContainer: { justifyContent: 'center', alignItems: 'center' },
    LoginText: { fontSize: 20, fontWeight: 'bold' },
    FormContainer: { padding: '5%' },
    ForgotPasswordContainer: { justifyContent: 'center', alignItems: 'flex-end', marginVertical: '4%' },
    LogintextColor: { color: ButtonthemeText },
    ButtonStyle: { backgroundColor: ButtonthemeColor, marginVertical: '3%' },
    SignupConatiner: { justifyContent: 'flex-end', alignItems: 'center' }
})
export default Login
