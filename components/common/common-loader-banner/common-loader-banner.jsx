import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import styles from "./common-loader-banner-style";

const logo = '../../../assets/ic_launcher_foreground.png';

const CommonLoaderBanner = (props) => {
    const loaderBanner = useSelector((state) => state.loaderBanner);

    return (
        <View style={[
            styles.common_load_banner_container,
            loaderBanner.status? styles.active : {}
        ]}>
            <Image style={[styles.loader_logo]} source={require(logo)} />
        </View>
    )
}

export default CommonLoaderBanner;