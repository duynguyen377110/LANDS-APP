import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    productBanner: {
        borderRadius: 5,
        height: 200,
        marginBottom: 10,
        width: '100%',
    },
    productOwner: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 15,
        textTransform: 'uppercase',
    },
    titleProduct: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 5,
        textDecorationLine: 'underline',
        textTransform: 'uppercase',
    },
    // INFORMATION
    productInfor: {
        borderColor: commonStyles.common.borderColor,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    productInforRow: {
        borderColor: commonStyles.common.borderColor,
        borderBottomWidth: 1,
        flexDirection: 'row',
        gap: 5,
    },
    productInforTitle: {
        borderColor: commonStyles.common.borderColor,
        borderRightWidth: 1,
        fontSize: 15,
        fontWeight: '600',
        paddingHorizontal: 10,
        paddingVertical: 20,
        textTransform: 'capitalize',
        width: 100,
        verticalAlign: 'middle',
    },
    productInforContent: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 15,
        padding: 10,
        verticalAlign: 'middle',
    },
    // VIEW IMAGE
    productThumbs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        paddingBottom: 15,
    },
    productThumbsContent: {
        height: 100,
        width: '30%'
    }
})

export default styles;