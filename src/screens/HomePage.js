import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";


const HomePage = () => {

    const [data, setData] = useState([])

    const [isSaved, setIsSaved] = useState(false)
    const [updateTheData, setUpdaTheData] = useState('')

    console.log(isSaved)

    // console.log("data: ", data)

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




    return (
        <View style={styles.container}>

            <TextInput
                value={updateTheData}
                onChangeText={setUpdaTheData}
                placeholder='enter your data'
                style={{ borderWidth: 1, width: '50%', paddingVertical: 10, textAlign: 'center', marginBottom: 30 }}





            />

            {data.map((value, index) => {

                return (
                    <Pressable
                        onPress={() => [updateData(value.id), setIsSaved(isSaved === false ? true : false)]}
                        key={index}>
                        <Text> {index}</Text>
                        <Text> {value.id} </Text>

                        <Text> {value.title} </Text>
                        <Text> {value.content} </Text>
                        <Text> {value.lesson} </Text>
                    </Pressable>
                )
            })}

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



        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({


    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'tomato'
    }
})