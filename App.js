import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

import React, { useState } from 'react';

export default function App() {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")


  console.log(name)
  console.log(lastName)


  return (

    <View style={styles.container}>

      <Text> Welcome {name} </Text>


      <Text>Name </Text>
      <TextInput
        placeholder='Enter Your Name'
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}

      />

      <Text> Last Name </Text>
      <TextInput
        placeholder='Enter Your Last Name'
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}

      />


      <Pressable
        onPress={() => console.log("clicked")}
        style={styles.button}>


        <Text style={styles.buttonText}>  Save </Text>


      </Pressable>
    </View>
  );
}

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

  }

});

