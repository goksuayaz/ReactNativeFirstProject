import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const CustomTextInput = ({ title, isSecureText, handleOnOnchangeText, handleValue, handlePlaceholder }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputBoxText}>{title}</Text>
            <TextInput
                secureTextEntry={isSecureText}
                placeholder={handlePlaceholder}
                style={styles.textInputStyle}
                onChangeText={handleOnOnchangeText}
                value={handleValue}
            />
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
    },
    inputBoxText: {
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    textInputStyle: {
        borderBottomWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 10,
        marginVertical: 10,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
    },
});
