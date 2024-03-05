import { StyleSheet } from 'react-native';

export const gStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#F3F4FB',

    },
    block: {
        flex: 1,
        display: 'flex',
        paddingBottom: 50,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        color: '#4D261B',
        fontSize: 25,
        paddingTop: 15,
        fontWeight: 900,
        textAlign: 'center',
        fontFamily: "rs-semi-bold",
    },
    modal: {
        flex: 1,
        marginTop: 35,
    }
}) 