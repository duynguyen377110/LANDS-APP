import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    commonHeaderComponent: {
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 5,
    },
    headerUserBtn: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    }
})

export default styles;