import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";
const styles = StyleSheet.create({
    commonMessageContainer: {
        backgroundColor: commonStyles.common.bgCommonOne,
        elevation: 5,
        display: 'none',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        left: 0,
        height: 60,
        position: 'absolute',
        right: 0,
        textAlign: 'center',
        top: 0,
        width: '100%',
        zIndex: 100,
    },
    active: {
        display: 'flex',
    },
    message: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    }
})

export default styles;