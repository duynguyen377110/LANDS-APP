import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./common-banner-style";

const CommonBanner = (props) => {

    return (
        <View style={[styles.commonBannerContainer]}>
            <Image
                style={[styles.bannerImage]}
                source={{uri: props.bannerImage}} />
            <View style={[styles.bannerMask]}>
                <View style={[styles.bannerMaskWrapper]}>
                    <TouchableOpacity onPress={props.onAbout}>
                        <Text style={[styles.bannerTitle]}>Chính sách khách hàng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CommonBanner;