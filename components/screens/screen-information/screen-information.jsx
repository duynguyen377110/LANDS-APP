import { ScrollView, View, Text, Image, TouchableOpacity, BackHandler } from "react-native";
import CommonHeader from "../../common/common-header/common-header";
import ViewFloatDetail from "../../views/view-float-detail/view-float-detail";
import { commonStyles } from "../../../styles";
import styles from './screen-information-style';

const iconUser = require("../../../assets/icons/user-profile-svgrepo-com.png");
const iconEmail = require("../../../assets/icons/email-svgrepo-com.png");
const iconPhone = require("../../../assets/icons/smartphone-svgrepo-com.png");
const iconAddress = require("../../../assets/icons/notebook-address-book-svgrepo-com.png");
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

            <ViewFloatDetail
                thumb={bannerInfor}>
                    <View style={[styles.userInfor]}>
                        <Image  style={[{width: 50, height: 50}]} source={iconUser} />
                        <Text style={[styles.userName]}>Nguyen Van A</Text>
                    </View>

                    <View style={[styles.inforItem]}>
                        <Image
                            style={[styles.inforIcon]}
                            source={iconEmail} />
                        <Text style={[styles.inforContent]}>nguyenvana@gmail.com</Text>
                    </View>

                    <View style={[styles.inforItem]}>
                        <Image
                            style={[styles.inforIcon]}
                            source={iconPhone} />
                        <Text style={[styles.inforContent]}>999 999 9989</Text>
                    </View>

                    <View style={[styles.inforItem]}>
                        <Image
                            style={[styles.inforIcon]}
                            source={iconAddress} />
                        <Text style={[styles.inforContent]}>30 Tan Thanh/ Tan Phu/ TP HCM</Text>
                    </View>

                    <View style={{marginTop: 25}}>
                        <TouchableOpacity
                            onPress={onExitHandler}
                            style={styles.logoutBtn}>
                            <Text style={[styles.titleBtn]}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </ViewFloatDetail>
        </ScrollView>
    )
}

export default ScreenInformation;