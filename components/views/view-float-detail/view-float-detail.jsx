import { ScrollView, View, Text, Image } from "react-native";
import { commonStyles } from "../../../styles";
import styles from "./view-float-detail-style";

const ViewFloatDetail = (props) => {

    return (
        <ScrollView style={{backgroundColor: '#ffffff', marginTop: -15}}>
            <View style={[commonStyles.view.wrapperView]}>
                <View style={[styles.banner]}>
                    <Image
                        style={[styles.bannerThumb]}
                        source={{uri: props.thumb}}/>
                    <View style={[styles.bannerMask]}></View>
                    <Text style={[styles.bannerTitle]}>{props.title}</Text>
                </View>

                <View style={[styles.container]}>
                    {props.children}
                </View>
            </View>
        </ScrollView>
    )
}

export default ViewFloatDetail;