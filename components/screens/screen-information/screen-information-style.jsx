import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    inforComponent: {
        position: 'relative',
        paddingBottom: 20,
        marginBottom: 20,
    },
    inforBackground: {
        height: 200,
        left: 0,
        right: 0,
        position: 'absolute',
        top: -15,
        width: 'max-content',
        zIndex: -1,
    },
    inforBackgroundBanner: {
        height: 200,
        width: '100%',
    },
    inforWrapper: {
        borderRadius: 5,
        minHeight: 550,
        flex: 1,
        position: 'relative',
        top: 150,
        width: '100%',
        zIndex: 1,
    },
    inforWrapperContent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        paddingTop: 30,
        elevation: 5,
    },
    inforUserCommon: {
        borderBottomWidth: 1,
        borderColor: commonStyles.common.borderColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        paddingBottom: 10,
    },
    inforUserCommonName: {
        fontSize: 18,
        fontWeight: 700,
        textTransform: 'uppercase'
    },
    inforUserEssental: {
        borderBottomWidth: 1,
        borderColor: commonStyles.common.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 15,
    },
    inforUserEssentalIcon: {
        height: 20,
        marginLeft: 35,
        width: 20,
    },
    inforUserEssentalTitle: {
        fontSize: 14,
        textAlign: 'left',
        flex: 1,
        flexWrap: 'wrap'
    },

    // SIGNOUT
    inforSignout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 35,
    },
    btnSignout: {
        backgroundColor: '#ef3636',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        width: 115,
    },
    btnSignoutTitle: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 600,
    }
})

export default styles;