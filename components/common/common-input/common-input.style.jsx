import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    label: {
        fontWeight: '500',
        fontSize: 17,
        textTransform: 'capitalize'
    },
    inputComponent: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: commonStyles.common.borderInput,
        marginVertical: 5,
        padding: 5,
        width: '100%'
    }
})

export default styles;