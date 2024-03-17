import { View, Text, TextInput } from "react-native";

import styles from "./common-input.style";

const CommonInput = (props) => {

    const onBlurHandler = (e) => {
        props.change(e);
    }

    return (
    <View style={[styles.inputComponent]}>
        <Text style={[styles.label]}>{props.label}</Text>
        <TextInput
            style={[styles.input]}
            onChangeText={onBlurHandler}
            value={props.value}
            secureTextEntry={props.type === 'password'? true : false}/>
    </View>
    )
}

export default CommonInput;