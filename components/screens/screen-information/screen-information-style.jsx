import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    userInfor: {
        borderBottomWidth: 1,
        borderColor: commonStyles.common.borderColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        paddingBottom: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 600,
        textTransform: 'uppercase'
    },
    inforItem: {
        borderBottomWidth: 1,
        borderColor: commonStyles.common.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 15,
    },
    inforIcon: {
        height: 20,
        marginLeft: 35,
        width: 20,
    },
    inforContent: {
        fontSize: 14,
        textAlign: 'left',
        flex: 1,
        flexWrap: 'wrap'
    },

    // SIGNOUT
    logoutBtn: {
        alignSelf: 'center',
        backgroundColor: '#ef3636',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 115,
    },
    titleBtn: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 600,
    }
})

export default styles;