import { View, Text, TextInput } from "react-native";

import styles from "./common-input.style";

const CommonInput = (props) => {

    const onChangeHandler = (e) => {
        props.change(e);
    }

    return (
    <View style={[styles.inputComponent]}>
        <Text style={[styles.label]}>{props.label}</Text>
        <TextInput
            style={[
                styles.input,
                (props?.valid?.status !== null && !props?.valid?.status)? styles.inputInvalid : {}
            ]}
            onChangeText={onChangeHandler}
            value={props.value}
            secureTextEntry={props.type === 'password'? true : false}/>

        {(props.valid?.message.length > 0) && (
            <Text style={[styles.messageInvalid]}>{props.valid.message}</Text>
        )}
    </View>
    )
}

export default CommonInput;