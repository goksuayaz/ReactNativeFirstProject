import { StyleSheet, Text, View, TextInput, Pressable, Image, } from 'react-native';

import React, { useState } from 'react';

// import Loading from '../components/Loading'

const LoginPage = ({ navigation }) => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [result, setResult] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    // console.log(isLoading)

    return (

        <View style={styles.container}>

            <Image
                source={require('../../assets/images/email.png')}
                style={styles.image} />


            <Text style={styles.welcome}> Welcome {result} </Text>


            <Text>Mail </Text>
            <TextInput

                inputMode='email'

                placeholder='Enter Your Mail'
                style={styles.textInputStyle}
                onChangeText={setName}
                value={name}

            />

            <Text> Password </Text>
            <TextInput
                secureTextEntry={true}

                placeholder='Enter Your Password'
                style={styles.textInputStyle}
                onChangeText={setLastName}
                value={lastName}

            />


            <Pressable
                onPress={() => setIsLoading(true)}
                style={({ pressed }) => [{

                    backgroundColor: pressed ? "gray" : 'blue'

                }, styles.button]} >


                <Text style={styles.buttonText}>  Login </Text>


            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('SignUp')}
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
    textInputStyle: {
        borderWidth: 1,
        width: '80%',
        height: 50,
        borderRadius: 16,
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
        backgroundColor: 'lightblue'

    },

    buttonText: {
        fontWeight: 'bold',

    },

    image: {
        width: 200,
        height: 250,
        resizeMode: 'stretch'

    },

    welcome: {
        fontWeight: 'bold',
        fontSize: 26,
    },

    signupButton: {

        width: '30%',
        height: 50,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',


    }

});

