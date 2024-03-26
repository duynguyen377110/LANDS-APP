import { StyleSheet } from "react-native";
import { commonStyles } from "../../../../styles";

const styles = StyleSheet.create({
    title: {
        color: commonStyles.common.colorText,
        fontSize: 15,
        fontWeight: 700,
        marginTop: 15,
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    listScrollComponent: {
        paddingVertical: 5,
    },
    viewCategory: {
        backgroundColor: commonStyles.common.colorFirst,
        borderRadius: 25,
        borderColor: commonStyles.common.colorFirst,
        borderWidth: 1,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginRight: 15,
        textAlign: 'center',
        width: 165,
    },
    viewTitle: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600',
    }
})

export default styles;