import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Loading, CustomTextInput, CustomButton } from '../components/'
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../redux/userSlice';
import { login, autoLogin } from '../redux/userSlice';


const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const [isLoading, setIsLoading] = useState(false)








    //userSlice içerisindeki verilerin okunması
    const { isLoading } = useSelector((state) => state.user);

    // console.log("Email: ", email)
    // console.log("Password: ", password)
    // console.log("Loading: ", isLoading)




    //useSlice içerisindeki reducer yapılarını kullanma veya veri gönderme
    const dispatch = useDispatch();

    //Kullanıcı daha once giris yaptiysa kontrol et ve otomatik giris yap
    useEffect(() => {
        dispatch(autoLogin())



    }, [])



    return (
        <View style={styles.container}>
            <Text style={styles.welcome}> Welcome </Text>

            <Image
                source={require('../../assets/images/email.png')}
                style={styles.image}
            />

            <CustomTextInput
                title="Email"
                isSecureText={false}
                handleOnOnchangeText={(text) => setEmail(text)}
                handleValue={email}
                handlePlaceholder="Enter Your Email"
            />

            <CustomTextInput
                title="Password"
                isSecureText={true}
                handleOnOnchangeText={(password) => setPassword(password)}
                handleValue={password}
                handlePlaceholder="Enter Your Password"
            />

            <CustomButton
                buttonText="Login"
                setWidth="80%"
                handleOnPress={() => dispatch(login({ email, password }))}
                buttonColor="blue"
                pressedButtonColor="gray"
            />

            <CustomButton
                buttonText="Sign Up"
                setWidth="30%"
                handleOnPress={() => navigation.navigate('Signup')}
                buttonColor="gray"
                pressedButtonColor="lightgray"
            />

            {isLoading
                ? <Loading
                    changeIsLoading={() => dispatch(setIsLoading(false))} />
                : null}



        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
    },
});
