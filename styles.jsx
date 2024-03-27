import { StyleSheet, Dimensions } from "react-native";

const styles = {
    colorFirst: '#efbe23',
    colorTwo: '#decf49',
    colorText: '#4b4b4b',
    colorError: '#f15454',
    colorOpacity: '#ededed70',
    bgForm: '#e9e9e9',
    bgCommon: '#f2f2f2',
    bgMask: '#3b3b3b1f',
    borderInput: '#ced4da',
    borderColor: '#ced4da',
}

const component = StyleSheet.create({
    wrapperComponent: {
        paddingHorizontal: 15,
    }
})

const view = StyleSheet.create({
    wrapperView: {
        paddingHorizontal: 15,
        width: '100%',
    }
})

const form = StyleSheet.create({
    fromContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        padding: 20,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: styles.bgForm,
        borderRadius: 5,
        padding: 15,
        width:'85%'
    },
    formIcon: {
        borderRadius: 50,
        height: 90,
        width: 90,
    },
    fromSugget: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 15,
    },
    formSuggetDes: {
        color: styles.colorText,
        fontSize: 16,
    },
    formSuggetLink: {
        color: styles.colorTwo,
        fontSize: 16,
    }
})

const button = StyleSheet.create({
    normal: {
        backgroundColor: styles.colorFirst,
        borderRadius: 5,
        padding: 10,
    },
    full: {
        width: '100%',
    },
    title: {
        color:'#ffffff',
        fontSize: 17,
        fontWeight: 500,
        textAlign: "center"
    }
})

const loader = StyleSheet.create({
    loader: {
        backgroundColor: styles.colorOpacity,
        display: 'none',
        flex: 1,
        height: '100%',
        position: 'absolute',
        zIndex: 1,
        width: '100%'
    },
    loaderActive: {
        display: 'flex'
    }
})

export const commonStyles = { button, common: styles, component, form, loader, view };