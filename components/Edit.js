import { MaterialIcons } from '@expo/vector-icons';
import { View, Button, StyleSheet, Text, FlatList, ScrollView, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';




const Edit = ({ setModalWindow }) => {
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState()

    const apiUrl = 'http://localhost:3000/posts';

    useEffect(() => {
        axios.get(`${apiUrl}/${data.id}`)
            .then(res => setData(res.data))
            .catch(err => console.warn(err))
    }, [])

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalWindow();

    };

    return (
        <View style={styles.main} >
            <TextInput
                style={styles.input}
                value={data.name}
                placeholder='Put name'
                onChangeText={(name) => setInputText(name)}>

            </TextInput>
            <TextInput
                style={styles.input}
                value={data.description}
                placeholder='Put title'
                onChangeText={(description) => setInputText(description)}>

            </TextInput>
            <TextInput
                style={styles.input}
                value={data.full}
                placeholder='Put title'
                onChangeText={(full) => setInputText(full)}>

            </TextInput>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    )
};
export default Edit;

const styles = StyleSheet.create({
    block: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontFamily: 'rs-semi-bold',
        fontSize: 18,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        padding: 12,
        marginTop: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#ccc',
        fontSize: 16,
        backgroundColor: '#fff',
        color: '#333',
    },
    button: {
        marginTop: 20,
        padding: 16,
        backgroundColor: '#007bff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'rs-regular',
    },
});