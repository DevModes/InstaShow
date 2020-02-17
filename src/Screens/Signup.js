import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, } from 'react-native'
import { Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { ButtonthemeColor, ButtonthemeText } from '../common/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Signup = (props) => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const loginSuccess = () => {
        if (!value.fullname) {
            Toast.show({
                text: "Please Enter Name",
                buttonText: "Okay",
                duration: 3000
            })
        }
        else if (!value.email) {
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
        }
        else {
            Toast.show({
                text: "Login Error",
                buttonText: "Okay",
                duration: 3000
            })
        }

    }
    const LoginPage = () => {
        props.navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={styles.MainConatiner}>
            <Content>
                <View style={styles.LoginTextContainer}>
                    <Text style={styles.LoginText}>Sign Up</Text>
                </View>
                <Form style={styles.FormContainer}>
                    <Item stackedLabel>
                        <Label>FullName</Label>
                        <Input autoCapitalize='none' value={value.fullname} onChangeText={(text) => setValue({ ...value, fullname: text })} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input autoCapitalize='none' value={value.email} onChangeText={(text) => setValue({ ...value, email: text })} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Password</Label>
                        <Input autoCapitalize='none' value={value.password} onChangeText={(text) => setValue({ ...value, password: text })} />
                    </Item>
                    <View style={styles.ForgotPasswordContainer}>
                        <TouchableOpacity>
                            <Text>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <Button style={styles.ButtonStyle} block onPress={loginSuccess}>
                        <Text style={styles.LogintextColor}>Signup</Text>
                    </Button>
                </Form>
            </Content>
            <View style={styles.SignupConatiner}>
                <TouchableOpacity onPress={LoginPage}>
                    <Text>Login In Your Account</Text>
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
export default Signup
