import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";


const HomePage = () => {

    const [data, setData] = useState([])

    const [isSaved, setIsSaved] = useState(false)

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
                allData.push(doc.data())
            });

            setData(allData)

        } catch (error) {

            console.log(error)
        }



    }




    //DELETE DATA FROM DATABASE

    const deleteData = async () => {
        await deleteDoc(doc(db, "rnLesson", "MWtC7IMOoD2H485QxdSy"));

    }

    //UPDATE DATA FROM DATABASE

    const updateData = async () => {

        try {
            const lessonData = doc(db, "rnLesson", "AurmIsxbLCRI6Jx8ynhS");

            await updateDoc(lessonData, {
                lesson: 145
            });

        } catch (error) {
            console.log(error)
        }
    }




    return (
        <View style={styles.container}>

            {data.map((value, index) => {

                return (
                    <View key={index}>
                        <Text> {index}</Text>

                        <Text> {value.title} </Text>
                        <Text> {value.content} </Text>
                        <Text> {value.lesson} </Text>
                    </View>
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