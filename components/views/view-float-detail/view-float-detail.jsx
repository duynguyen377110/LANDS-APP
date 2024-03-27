import { ScrollView, View, Text, Image } from "react-native";
import { commonStyles } from "../../../styles";
import styles from "./view-float-detail-style";

const bannerInfor = 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711441889/lands/banner-infor_pgl7ks.jpg';

const ViewFloatDetail = (props) => {

    return (
        <View style={[commonStyles.view.wrapperView]}>
            <View style={[styles.banner]}>
                <Image
                    style={[styles.bannerThumb]}
                    source={{uri: props.thumb}}/>
                <View style={[styles.bannerMask]}></View>
                <Text style={[styles.bannerTitle]}>{props.title}</Text>
            </View>

            <View style={[styles.container]}>
                <Text>Content</Text>
            </View>
        </View>
    )
}

export default ViewFloatDetail;