import { View, Text, Button } from "react-native";
import CommonInput from "../../common/common-input/common-input";
import styles from "./screen-signin-style";

const ScreenSignin = (props) => {

    const onSignInHandler = (e) => {
        props.navigation.navigate('dashboard');
    }

    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <View style={[styles.formWrapper]}>
                <CommonInput />
                <Button title="SignIn" onPress={onSignInHandler} />
            </View>
        </View>
    )
}

export default ScreenSignin;