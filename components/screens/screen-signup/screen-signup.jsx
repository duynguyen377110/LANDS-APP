import { KeyboardAvoidingView, View, Text, Image, Platform } from "react-native";

import CommonInput from "../../common/common-input/common-input";
import CommonButton from "../../common/common-button/common-button";

import useHttp from "../../../hook/use-http";
import useValdator from "../../../hook/use-validator";

import { commonStyles } from "../../../styles";
import environment from "../../../environment";

const icon = require("../../../assets/ic_launcher_foreground.png");
const url = `${environment.api.url}${environment.api.auth.signup}`;

const ScreenSignup = (props) => {
    const {
        value: fullNameVal, valid: fullNameValid,
        verifyElm: veryfiFullName,
        blurElm: blurFullName,
        enterVal: fullNameEnterVal, resetVal: fullNameResetVal
    } = useValdator(['require']);

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

    const {
        value: phoneVal, valid: phoneValid,
        verifyElm: veryfiPhone,
        blurElm: blurPhone,
        enterVal: phoneEnterVal, resetVal: phoneResetVal
    } = useValdator(['require', 'phone']);

    const {
        value: addressVal, valid: addressValid,
        verifyElm: veryfiAddress,
        blurElm: blurAddress,
        enterVal: addressEnterVal, resetVal: addressResetVal
    } = useValdator(['require']);

    const { http } = useHttp(url);



    const onSignInHandler = (e) => {
        veryfiFullName(fullNameVal);
        veryfiEmail(emailVal);
        veryfiPass(passVal);
        veryfiPhone(phoneVal);
        veryfiAddress(addressVal);

        let statusValid = (fullNameValid && emailValid.status && passValid.status) && (phoneValid.status && addressValid.status);
        let statusValue = (fullNameVal && emailVal && passVal && phoneVal && addressVal);
        if(statusValid && statusValue) {
            let payload = {
                fullName: fullNameVal,
                email: emailVal,
                password: phoneVal,
                phone: phoneVal,
                address: addressVal
            }

            http(method ='POST', payload, (information) => {
                let { status } = information;
                if(status) {
                    fullNameResetVal();
                    emailResetVal();
                    passResetVal();
                    phoneResetVal();
                    addressResetVal();
                    props.navigation.navigate('signin');
                }
            });

            return;
        }
    }

    const onNavigaterHandler = (e) => {
        props.navigation.navigate('signin');
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
                    label='Họ và tên'
                    value={fullNameVal}
                    valid={fullNameValid}
                    change={fullNameEnterVal}
                    blur={blurFullName}/>

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

                <CommonInput
                    label='Số điện thoại'
                    type='phone'
                    value={phoneVal}
                    valid={phoneValid}
                    change={phoneEnterVal}
                    blur={blurPhone}/>

                <CommonInput
                    label='Địa chỉ'
                    type='address'
                    value={addressVal}
                    valid={addressValid}
                    change={addressEnterVal}
                    blur={blurAddress}/>

                <CommonButton
                title="Đăng ký"
                width="full"
                click={onSignInHandler}/>

                <View style={[commonStyles.form.fromSugget]}>
                    <Text style={[commonStyles.form.formSuggetDes]}>Bạn đã có tài khoản?</Text>
                    <Text
                        onPress={onNavigaterHandler}
                        style={[commonStyles.form.formSuggetLink]}>Đăng nhập</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default ScreenSignup;