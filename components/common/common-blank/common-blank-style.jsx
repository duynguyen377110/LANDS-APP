import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    commonBlankContainer: {
        paddingVertical: 50,
        width: '100%',
    },
    title: {
        color: commonStyles.common.colorText,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'capitalize',
    }
})

export default styles;

