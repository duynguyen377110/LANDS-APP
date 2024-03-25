import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./common-header-style";

const icons = require("../../../assets/icons/back-svgrepo-com.png");

const CommonHeader = (props) => {

    const onBackHandler = (event) => {
        props.onBackScreen();
    }

    return (
        <View style={[styles.commonHeaderComponent]}>
            <TouchableOpacity onPress={onBackHandler}>
                <Image
                    source={icons}
                    style={[{width: 20, height: 20}]} />
            </TouchableOpacity>
        </View>
    )
}

export default CommonHeader;