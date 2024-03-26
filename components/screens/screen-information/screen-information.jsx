import { ScrollView, View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import CommonHeader from "../../common/common-header/common-header";
import { commonStyles } from "../../../styles";
import styles from './screen-information-style';

const iconUser = require("../../../assets/icons/user-profile-svgrepo-com.png");
const bannerInfor = 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711441889/lands/banner-infor_pgl7ks.jpg';

const ScreenInformation = (props) => {

    const onExitHandler = (event) => {
        BackHandler.exitApp();
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation}/>

            <View style={[
                commonStyles.component.wrapperComponent,
                styles.inforComponent
            ]}>
                <View style={[styles.inforBackground]}>
                    <Image style={[styles.inforBackgroundBanner]} source={{uri: bannerInfor}} />
                </View>
                <View style={[styles.inforWrapper]}>
                    <View style={[styles.inforWrapperContent]}>
                        <View style={[styles.inforUserCommon]}>
                            <Image  style={[{width: 50, height: 50}]} source={iconUser} />
                            <Text style={[styles.inforUserCommonName]}>Nguyen Van A</Text>
                        </View>

                        <View style={[styles.inforUserEssental]}>
                            <Image  style={[styles.inforUserEssentalIcon]} source={iconUser} />
                            <Text style={[styles.inforUserEssentalTitle]}>nguyenvana@gmail.com</Text>
                        </View>

                        <View style={[styles.inforUserEssental]}>
                            <Image  style={[styles.inforUserEssentalIcon]} source={iconUser} />
                            <Text style={[styles.inforUserEssentalTitle]}>999 999 9989</Text>
                        </View>

                        <View style={[styles.inforUserEssental]}>
                            <Image style={[styles.inforUserEssentalIcon]} source={iconUser} />
                            <Text style={[styles.inforUserEssentalTitle]}>30 Tan Thanh/ Tan Phu/ TP HCM</Text>
                        </View>

                        <View style={[styles.inforSignout]}>
                            <TouchableOpacity
                                onPress={onExitHandler}
                                style={styles.btnSignout}>
                                <Text style={[styles.btnSignoutTitle]}>Đăng xuất</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ScreenInformation;