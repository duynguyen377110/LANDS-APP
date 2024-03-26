import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        overflow: 'hidden',
        position: 'relative',
        width: '47%',
    },
    cardThumb: {
        height: 130,
        width: '100%',
    },
    cardInfor: {
        backgroundColor: '#00000073',
        bottom: 0,
        left: 0,
        padding: 10,
        position: 'absolute',
        width: '100%'
    },
    cardTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 500,
    }
})

export default styles;