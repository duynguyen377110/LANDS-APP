import { View, Text, TextInput } from "react-native";
import styles from "./common-input.style";

const CommonInput = (props) => {

    return (
    <View>
        <Text>Input</Text>
        <TextInput
            style={[styles.input]}/>
    </View>
    )
}

export default CommonInput;