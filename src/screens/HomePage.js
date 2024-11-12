import { Pressable, StyleSheet, Text, View, TextInput, FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import Animated, { BounceIn } from 'react-native-reanimated';

const HomePage = () => {

    const [data, setData] = useState([])

    const [isSaved, setIsSaved] = useState(false)
    const [updateTheData, setUpdaTheData] = useState('')

    const dispatch = useDispatch()





    console.log(isSaved)

    console.log("data: ", data)




    useEffect(() => {

        getData()

    }, [isSaved])



    //SEND DATA TO FIREBASE

    const sendData = async () => {

        try {
            const docRef = await addDoc(collection(db, "rnLesson"), {
                title: "Zero to Hero",
                content: "React Native tutorial for beginner",
                lesson: 90
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //GET DATA FROM FIREBASE

    const getData = async () => {

        const allData = []



        try {

            const querySnapshot = await getDocs(collection(db, "rnLesson"));
            querySnapshot.forEach((doc) => {
                // console.log(`${doc.id} => ${doc.data()}`);
                allData.push({ ...doc.data(), id: doc.id })
            });

            setData(allData)

        } catch (error) {

            console.log(error)
        }



    }




    //DELETE DATA FROM DATABASE

    const deleteData = async (value) => {

        try {
            await deleteDoc(doc(db, "rnLesson", value));
            console.log("Delete succesfull")

        } catch (error) {
            console.log(error)

        }


    }

    //UPDATE DATA FROM DATABASE

    const updateData = async (value) => {

        try {
            const lessonData = doc(db, "rnLesson", value);

            await updateDoc(lessonData, {
                content: updateTheData
            });

        } catch (error) {
            console.log(error)
        }
    }


    //Kullanıcı çıkış işlemleri

    const handleLogout = () => {
        dispatch(logout())


    }


    const renderItem = ({ item, index }) => {

        return (

            <Animated.View
                entering={BounceIn.delay(100 * (index + 1))}

                style={styles.flatlistContainer}>
                <Text>  {item.id} </Text>
                <Text>  {item.title} </Text>
                <Text>  {item.content} </Text>

            </Animated.View>
        )


    }




    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                value={updateTheData}
                onChangeText={setUpdaTheData}
                placeholder='enter your data'
                style={{ borderWidth: 2, width: '40%', paddingVertical: 10, textAlign: 'center', marginTop: 30, marginBottom: 40 }}


            />


            <FlatList
                data={data}
                style={styles.flatlist}
                keyExtractor={item => item.id}
                renderItem={renderItem}

            />





            <CustomButton
                buttonText={"Save"}
                setWidth={"40%"}
                buttonColor={'blue'}
                pressedButtonColor={'gray'}
                handleOnPress={() => { sendData(), setIsSaved(isSaved === false ? true : false) }}

            />


            <CustomButton
                buttonText={"Get Data"}
                setWidth={"40%"}
                buttonColor={'blue'}
                pressedButtonColor={'gray'}
                handleOnPress={getData}

            />


            <CustomButton
                buttonText={"Delete Data"}
                setWidth={"40%"}
                buttonColor={'blue'}
                pressedButtonColor={'gray'}
                handleOnPress={deleteData}
            />
            <CustomButton
                buttonText={"Update Data"}
                setWidth={"40%"}
                buttonColor={'blue'}
                pressedButtonColor={'gray'}
                handleOnPress={updateData}

            />
            <CustomButton
                buttonText={"Logout"}
                setWidth={"40%"}
                buttonColor={'red'}
                pressedButtonColor={'gray'}
                handleOnPress={handleLogout}

            />



        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({


    container: {

        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    },

    flatlistContainer: {

        borderWidth: 1,
        marginVertical: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    flatlist: {
        width: "90%",
        backgroundColor: "white",
        padding: 10,



    }
})