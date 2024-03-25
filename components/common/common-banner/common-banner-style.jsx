import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    commonBannerContainer: {
        backgroundColor: 'red',
        borderRadius: 5,
        height: 200,
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    bannerImage: {
        height: 200,
        width: '100%'
    },
    bannerMask: {
        backgroundColor: '#00000029',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%',
        padding: 15,
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    },
    bannerMaskWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bannerTitle: {
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 600,
        width: 100
    },
    bannerBtnIcon: {
        color: '#ffffff'
    }
})

export default styles;