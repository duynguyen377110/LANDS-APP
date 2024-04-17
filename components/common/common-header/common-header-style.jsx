import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    commonHeaderComponent: {
        backgroundColor: '#f5f5f5',
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingBottom: 10,
        paddingTop: 35,
        paddingHorizontal: 15,
    },
    boxUser: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    },
    headerUserBtn: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'
    }
})

export default styles;