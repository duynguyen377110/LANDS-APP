import { KeyboardAvoidingView, View, Text, Image, Platform } from "react-native";
import useValdator from "../../../hook/use-validator";
import CommonInput from "../../common/common-input/common-input";
import CommonButton from "../../common/common-button/common-button";
import { commonStyles } from "../../../styles";

const icon = require("../../../assets/ic_launcher_foreground.png");

const ScreenSignup = (props) => {

    const {
        value: emailVal, valid: emailValid,
        verifyElm: veryfiEmail,
        enterVal: emailEnterVal, resetVal: emailResetVal
    } = useValdator(['require', 'email']);

    const {
        value: passVal, valid: passValid,
        verifyElm: veryfiPass,
        enterVal: passEnterVal, resetVal: passResetVal
    } = useValdator(['require', 'password']);

    const {
        value: phoneVal, valid: phoneValid,
        verifyElm: veryfiPhone,
        enterVal: phoneEnterVal, resetVal: phoneResetVal
    } = useValdator(['require', 'phone']);

    const {
        value: addressVal, valid: addressValid,
        verifyElm: veryfiAddress,
        enterVal: addressEnterVal, resetVal: addressResetVal
    } = useValdator(['require']);

    const onSignInHandler = (e) => {
        veryfiEmail(emailVal);
        veryfiPass(passVal);
        veryfiPhone(phoneVal);
        veryfiAddress(addressVal);

        if((!emailValid.status && !passValid.status) && (!phoneValid.status && !addressValid.status)) return;
        emailResetVal();
        passResetVal();
        phoneResetVal();
        addressResetVal();
        props.navigation.navigate('signin');
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

                <CommonInput
                    label='Số điện thoại'
                    type='phone'
                    value={phoneVal}
                    valid={phoneValid}
                    change={phoneEnterVal}/>

                <CommonInput
                    label='Địa chỉ'
                    type='address'
                    value={addressVal}
                    valid={addressValid}
                    change={addressEnterVal}/>

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