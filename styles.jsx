import { StyleSheet } from "react-native";

const styles = {
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

export const commonStyles = { common: styles, form };