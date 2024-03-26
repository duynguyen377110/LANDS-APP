import { ScrollView, View, Text, Image } from "react-native";
import CommonHeader from "../../common/common-header/common-header";
import { commonStyles } from "../../../styles";
import styles from './screen-information-style';

const iconUser = require("../../../assets/icons/user-profile-svgrepo-com.png");
const bannerInfor = 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711441889/lands/banner-infor_pgl7ks.jpg';

const ScreenInformation = (props) => {

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
                            <Image  style={[{width: 25, height: 25}]} source={iconUser} />
                            <Text>Nguyen Van A</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ScreenInformation;