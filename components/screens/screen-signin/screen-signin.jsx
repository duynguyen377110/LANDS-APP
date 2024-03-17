import { View, KeyboardAvoidingView, Platform } from "react-native";
import useValdator from "../../../hook/use-validator";

import CommonInput from "../../common/common-input/common-input";
import CommonButton from "../../common/common-button/common-button";
import { commonStyles } from "../../../styles";

const ScreenSignin = (props) => {
    const {
        value: emailVal, valid: emailValid,
        verifyElm: veryfiEmail,
        enterVal: emailEnterVal, resetVal: emailResetVal
    } = useValdator();

    const {
        value: passVal, valid: passValid,
        verifyElm: veryfiPass,
        enterVal: passEnterVal, resetVal: passResetVal
    } = useValdator();

    const onSignInHandler = (e) => {
        veryfiEmail(emailVal, ['require', 'email']);
        veryfiPass(passVal, ['require', 'password']);

        if(emailVal && passVal) {
            emailResetVal();
            passResetVal();
            props.navigation.navigate('dashboard');
        }
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === 'ios'? 100 : 0}
            style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <View style={[commonStyles.form.wrapper]}>
                <CommonInput
                    label='E-mail'
                    value={emailVal}
                    valid={emailValid}
                    change={emailEnterVal}/>

                <CommonInput
                    label='Mật khẩu'
                    type='password'
                    value={passVal}
                    valid={passValid}
                    change={passEnterVal}/>

                <CommonButton
                title="Đăng nhập"
                click={onSignInHandler}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ScreenSignin;