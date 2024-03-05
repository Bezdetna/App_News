import { Text, View, Pressable, Image, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { gStyles } from "../styles/mainStyle"



export default function Info({ route }) {
    // const loadScene = () => {
    //     navigation.goBack();
    // };
    return (
        <ImageBackground
            source={{
                uri: route.params.img
            }}
            style={gStyles.main}>
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
            <View style={gStyles.block}>
                <Text style={[gStyles.title, styles.title]}>
                    {route.params.name}
                </Text>
                <Text style={[gStyles.full, styles.full]}>
                    {route.params.full}
                </Text>
                <Pressable style={styles.button}>
                    <Text
                        style={styles.textOfButton}>
                        Get Started
                    </Text>
                </Pressable>
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    full: {
        fontFamily: 'rs-semi-bold',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        color: '#ffffff',
    },
    title: {
        fontSize: 30,
        color: '#ffffff'
    },
    button: {
        display: 'flex',
        padding: 5,
        backgroundColor: "rgba(52, 49, 45, 0.50)",
        borderRadius: '50%',
        width: "100%",
        alignItems: 'center',
        margin: 10
    },
    textOfButton: {
        color: '#ffffff'
    },
});