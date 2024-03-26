import { StyleSheet } from "react-native";
import { commonStyles } from "../../../../styles";

const styles = StyleSheet.create({
    listScrollComponent: {
        paddingVertical: 15,
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
        width: 150,
    },
    viewTitle: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: '600',
    }
})

export default styles;