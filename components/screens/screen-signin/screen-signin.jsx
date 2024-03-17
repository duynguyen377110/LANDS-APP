import { Image, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import useValdator from "../../../hook/use-validator";

import CommonInput from "../../common/common-input/common-input";
import CommonButton from "../../common/common-button/common-button";
import { commonStyles } from "../../../styles";

const icon = require("../../../assets/ic_launcher_foreground.png");

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
            style={[commonStyles.form.fromContainer]}>
            <View style={[commonStyles.form.wrapper]}>
                <Image
                    style={[commonStyles.form.formIcon]}
                    source={icon} />

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
                width="full"
                click={onSignInHandler}/>

                <View style={[commonStyles.form.fromSugget]}>
                    <Text style={[commonStyles.form.formSuggetDes]}>Bạn chưa có tài khoản?</Text>
                    <Text style={[commonStyles.form.formSuggetLink]}>Đăng ký</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ScreenSignin;