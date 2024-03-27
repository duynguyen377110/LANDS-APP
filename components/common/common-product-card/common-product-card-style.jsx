import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        minHeight: 100,
        overflow: 'hidden',
        width: '47%',
        alignSelf: 'flex-start'
    },
    productThumb: {
        borderRadius: 5,
        height: 100,
        marginBottom: 5,
        width: '100%',
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
    }
})

export default styles;