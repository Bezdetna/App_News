import React, { useState, useEffect } from 'react';
import { gStyles } from "../styles/mainStyle";
import { Text, View, Button, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import axios from 'axios';
import Main from './Main';




export default function Form({ setModalWindow, fetchArticles }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [full, setFull] = useState('');

    const [apiResponse, setApiResponse] = useState(false);


    const submitForm = async () => {
        let formData = {
            name: name,
            description: description,
            full: full,
        };
        const apiUrl = 'http://localhost:3000/posts';

        try {
            const response = await axios.post(apiUrl, formData);
            if (response.status === 201) {
                console.log('Response data:', response.data);
                setApiResponse(true);
            } else {
                console.warn('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.log('Error:', error);
        };
        setModalWindow(false);
        fetchArticles();
    };
    return (
        <ScrollView style={{ backgroundColor: '#fefae0' }}>
            <View style={styles.block}>
                {!apiResponse && (
                    < >
                        <Text style={styles.title}>Title</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            placeholder='Put title'
                            onChangeText={setName} />
                        <Text style={styles.title}>Description</Text>
                        <TextInput
                            style={styles.input}
                            value={description}
                            placeholder='Put anons'
                            onChangeText={setDescription} />
                        <Text style={styles.title}>Full info</Text>
                        <TextInput
                            style={styles.input}
                            value={full}
                            multiline
                            placeholder='Put text'
                            onChangeText={setFull} />
                        <Button title='Add' onPress={submitForm} />
                    </>
                )}
            </View>
        </ScrollView>


    );
};

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
