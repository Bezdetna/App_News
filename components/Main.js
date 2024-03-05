import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal, Pressable } from 'react-native';
import axios from 'axios';
import { gStyles } from "../styles/mainStyle";
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Form from './Form';
import Edit from './Edit';


const Main = ({ navigation }) => {
    const [modalWindow, setModalWindow] = useState(false);
    const [articles, setArticles] = useState([]);

    const apiUrl = 'http://localhost:3000/posts';

    const fetchArticles = async () => {
        await axios.get(apiUrl)
            .then(response =>
                setArticles(response.data),
            )
            .catch(err =>
                console.log(err)
            )
    };

    const handleDelete = async (id) => {
        await axios.delete(`${apiUrl}/${id}`)
            .then(res => {
                console.log(`Deleted post with ID ${id}`);
                fetchArticles();
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleEdit = (id) => {

    }



    useEffect(() => {
        setArticles();
        fetchArticles();

    }, []);


    return (
        <View style={gStyles.main}>
            <Modal visible={modalWindow} >
                <View style={[gStyles.main, styles.main]}>
                    <AntDesign name="closecircleo"
                        marginTop={10} size={30} color="black" style={styles.iconAdd} onPress={() => setModalWindow(false)} />
                    <Text style={[gStyles.title, styles.header]}>
                        Add News
                    </Text>
                    <Form setModalWindow={setModalWindow} fetchArticles={fetchArticles} />
                </View>
            </Modal>
            <Modal visible={modalWindow} >
                <View style={[gStyles.main, styles.main]}>
                    <AntDesign name="closecircleo"
                        marginTop={10} size={30} color="black" style={styles.iconAdd} onPress={() => setModalWindow(false)} />
                    <Text style={[gStyles.title, styles.header]}>
                        Edit News
                    </Text>
                    <Edit setModalWindow={setModalWindow} fetchArticles={fetchArticles} />
                </View>
            </Modal>
            <Text style={[gStyles.title, styles.header]}>
                NEWS
            </Text>
            <Feather name="plus" size={30} style={styles.iconAdd} onPress={() => setModalWindow(true)} />

            <FlatList
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('Info', item)}>

                        <View style={styles.content}>
                            <View style={styles.icon}>
                                <MaterialIcons name="edit" size={24} color="black" onPress={() => navigation.navigate('Edit', item)} />
                                <MaterialIcons name="delete" size={24} color="black" onPress={() => handleDelete(item.id)} />
                            </View>
                            <Image
                                source={{ uri: item.img }}
                                style={styles.image}
                            />
                            <View style={styles.info}>
                                <Text style={styles.title}>
                                    {item.name}
                                </Text>
                                <Text style={styles.description}>
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    item: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: 'lightgreen'
    },
    content: {
        display: 'flex',
        justifyContent: 'flex-start',

    },
    info: {
        marginLeft: 20,
        textAlign: 'center',
    },
    title: {
        fontFamily: 'rs-semi-bold',
        fontSize: 25,
        color: '#4D261B'
    },
    description: {
        fontSize: 17,
        color: '#958071'
    },
    image: {
        width: '90%',
        height: 400,
        borderRadius: 5
    },
    iconAdd: {
        textAlign: 'right',
        marginTop: 50,
        marginRight: 30,
        color: "#4D261B",
    },
    main: {
        justifyContent: 'center',
        backgroundColor: '#fefae0',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        color: '#333',
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 5,
        padding: 10,
    }
});
