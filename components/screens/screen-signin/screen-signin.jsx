import { View, Button } from "react-native";
import useValdator from "../../../hook/use-validator";

import CommonInput from "../../common/common-input/common-input";
import { commonStyles } from "../../../styles";

const ScreenSignin = (props) => {
    const { value: emailVal, enterVal: emailEnterVal, resetVal: emailResetVal } = useValdator();
    const { value: passVal, enterVal: passEnterVal, resetVal: passResetVal } = useValdator();

    const onSignInHandler = (e) => {
        if(emailVal && passVal) {
            props.navigation.navigate('dashboard');
        }
    }

    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <View style={[commonStyles.form.wrapper]}>
                <CommonInput
                    label='E-mail'
                    change={emailEnterVal}/>

                <CommonInput
                    label='Password'
                    type='password'
                    change={passEnterVal}/>

                <Button title="SignIn" onPress={onSignInHandler} />
            </View>
        </View>
    )
}

export default ScreenSignin;