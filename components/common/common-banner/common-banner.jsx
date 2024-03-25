import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./common-banner-style";

const CommonBanner = (props) => {

    return (
        <View style={[styles.commonBannerContainer]}>
            <Image
                style={[styles.bannerImage]}
                source={{uri: 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711359072/lands/banner_ximjch.jpg'}} />
            <View style={[styles.bannerMask]}>
                <View style={[styles.bannerMaskWrapper]}>
                    <Text style={[styles.bannerTitle]}>Chính sách khách hàng</Text>
                    <TouchableOpacity style={[styles.bannerBtn]}></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CommonBanner;