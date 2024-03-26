import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    label: {
        fontWeight: '400',
        fontSize: 14,
        textTransform: 'capitalize'
    },
    inputComponent: {
        marginBottom: 10,
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commonStyles.common.borderInput,
        marginVertical: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: '100%'
    },
    inputInvalid: {
        borderColor: 'red'
    },
    messageInvalid: {
        color: commonStyles.common.colorError
    }
})

export default styles;