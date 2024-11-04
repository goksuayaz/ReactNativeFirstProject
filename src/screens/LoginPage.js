import { StyleSheet, Text, View, TextInput, Pressable, Image, } from 'react-native';

import React, { useState } from 'react';
import { Loading, CustomTextInput } from '../components';

// import Loading from '../components/Loading'

const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    // console.log(isLoading)

    return (

        <View style={styles.container}>

            <Text style={styles.welcome}> Welcome {result} </Text>

            <Image
                source={require('../../assets/images/email.png')}
                style={styles.image} />

            <CustomTextInput
                title='Email'
                isSecureText={false}
                handleOnOnchangeText={setEmail}
                handleValue={email}
                handlePlaceholder='Enter Your Email'


            />

            <CustomTextInput
                title='Password'
                isSecureText={true}
                handleOnOnchangeText={setPassword}
                handleValue={password}
                handlePlaceholder='Enter Your Password'



            />






            <Pressable
                onPress={() => setIsLoading(true)}
                style={({ pressed }) => [{

                    backgroundColor: pressed ? "gray" : 'blue'

                }, styles.button]} >


                <Text style={styles.buttonText}>  Login </Text>


            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('Signup')}
                style={({ pressed }) => [{

                    backgroundColor: pressed ? "gray" : 'blue',
                    marginTop: 50,

                }, styles.signupButton]} >


                <Text style={styles.buttonText}>  Sign Up </Text>


            </Pressable>

            {isLoading

                ? <Loading changeIsLoading={() => setIsLoading(false)} />
                : null}

            {/* <Loading /> */}
        </View >
    );
}


export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


    inputContainer: {


        width: '80%',

    },



    textInputStyle: {
        borderBottomWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold'

    },

    button: {


        borderWidth: 1,
        width: '80%',
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        marginTop: 20

    },

    buttonText: {
        fontWeight: 'bold',

    },

    image: {
        width: 150,
        height: 150,
        marginBottom: 20,

    },

    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30
    },

    signupButton: {

        width: '30%',
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',


    },

    inputBoxText: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',

    }

});

