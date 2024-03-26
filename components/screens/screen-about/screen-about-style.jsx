import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screenAboutComponent: {
        backgroundColor: 'transparent',
        flex: 1,
        paddingHorizontal: 15,
    },
    aboutPoster: {
        backgroundColor: 'red',
        borderRadius: 5,
        height: 200,
        marginBottom: 15,
        overflow: 'hidden',
        width: '100%'
    },
    aboutThumb: {
        height: '100%',
        with: '100%',
    },
    aboutSubTitle: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 5,
    },
    aboutSubDesc: {
        textAlign: 'justify',
        fontSize: 15,
        lineHeight: 25,
        marginBottom: 20,
    }
})

export default styles;