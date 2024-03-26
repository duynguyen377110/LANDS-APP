import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inforComponent: {
        position: 'relative',
        paddingBottom: 20,
        marginBottom: 20,
    },
    inforBackground: {
        backgroundColor: 'red',
        height: 200,
        left: 0,
        right: 0,
        position: 'absolute',
        top: -15,
        width: 'max-content',
        zIndex: -1,
    },
    inforBackgroundBanner: {
        height: 200,
        width: '100%',
    },
    inforWrapper: {
        borderRadius: 5,
        height: 350,
        position: 'relative',
        top: 150,
        width: '100%',
        zIndex: 1,
    },
    inforWrapperContent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        elevation: 5,
    }
})

export default styles;