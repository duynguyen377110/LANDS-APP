import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    // BANNER
    banner: {
        left: 0,
        height: 200,
        right: 0,
        position: 'absolute',
        top: 0,
        width: 'max-content',
        zIndex: -1,
    },
    bannerThumb: {
        height: 200,
        width: '100%',
    },
    bannerMask: {
        backgroundColor: commonStyles.common.bgMask,
        height: '100%',
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    bannerTitle: {
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '600',
        position: 'absolute',
        textTransform: 'uppercase',
        top: 100,
        width: 'fit-content'
    },

    // CONTAINER
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        elevation: 5,
        minHeight: 500,
        marginTop: 150,
        marginBottom: 15,
        padding: 15,
    }
})

export default styles;