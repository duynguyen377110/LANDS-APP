import { StyleSheet } from "react-native";

const styles = {
    colorFirst: '#25adde',
    bgForm: '#e9e9e9',
    borderInput: '#ced4da'
}

const form = StyleSheet.create({
    wrapper: {
        backgroundColor: styles.bgForm,
        borderRadius: 5,
        padding: 15,
        width:'85%'
    }
})

const button = StyleSheet.create({
    normal: {
        backgroundColor: styles.colorFirst,
        borderRadius: 5,
        padding: 10,
    },
    title: {
        color:'#ffffff',
        fontSize: 17,
        fontWeight: 500,
        textAlign: "center"
    }
})

export const commonStyles = { button, common: styles, form };