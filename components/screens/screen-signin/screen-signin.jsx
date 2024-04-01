import { Image, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import useValdator from "../../../hook/use-validator";
import useHttp from "../../../hook/use-http";

import environment from "../../../environment";
import CommonInput from "../../common/common-input/common-input";
import CommonButton from "../../common/common-button/common-button";
import { commonStyles } from "../../../styles";

const icon = require("../../../assets/ic_launcher_foreground.png");
const url = `${environment.api.url}${environment.api.auth.signin}`;

const ScreenSignin = (props) => {

    const {
        value: emailVal, valid: emailValid,
        verifyElm: veryfiEmail,
        blurElm: blurEmail,
        enterVal: emailEnterVal, resetVal: emailResetVal
    } = useValdator(['require', 'email']);

    const {
        value: passVal, valid: passValid,
        verifyElm: veryfiPass,
        blurElm: blurPass,
        enterVal: passEnterVal, resetVal: passResetVal
    } = useValdator(['require', 'password']);

    const { http } = useHttp(url);

    const onSignInHandler = async (e) => {
        veryfiEmail(emailVal);
        veryfiPass(passVal);

        let statusValid = (emailValid.status && passValid.status);
        let statusValue = (emailVal && passVal);

        if(statusValid && statusValue) {
            let payload = {
                email: emailVal,
                password: passVal
            }

            http('POST', payload, (res) => {
                let { status, metadata } = res;
                if(status) {
                    console.log(metadata);
                    emailResetVal();
                    passResetVal();
                    props.navigation.navigate('dashboard');
                    return;
                }
            })
        }

    }

    const onNavigaterHandler = (e) => {
        props.navigation.navigate('signup');
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
                    change={emailEnterVal}
                    blur={blurEmail}/>

                <CommonInput
                    label='Mật khẩu'
                    type='password'
                    value={passVal}
                    valid={passValid}
                    change={passEnterVal}
                    blur={blurPass}/>

                <CommonButton
                title="Đăng nhập"
                width="full"
                click={onSignInHandler}/>

                <View style={[commonStyles.form.fromSugget]}>
                    <Text style={[commonStyles.form.formSuggetDes]}>Bạn chưa có tài khoản?</Text>
                    <Text
                        onPress={onNavigaterHandler}
                        style={[commonStyles.form.formSuggetLink]}>Đăng ký</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ScreenSignin;