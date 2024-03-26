import { View, Image, TouchableOpacity } from 'react-native';
import styles from "./common-header-style";

const iconBack = require("../../../assets/icons/back-svgrepo-com.png");
const iconUser = require("../../../assets/icons/user-profile-svgrepo-com.png");

const CommonHeader = (props) => {

    const onBackOldScreenHandler = (event) => {
        props.navigation.goBack();
    }

    const onToScreenInfor = (event) => {
        props.navigation.navigate('information');
    }

    return (
        <View style={[styles.commonHeaderComponent]}>
            {props.backButtonShow && (
                <TouchableOpacity onPress={onBackOldScreenHandler}>
                    <Image
                        source={iconBack}
                        style={[{width: 25, height: 25}]} />
                </TouchableOpacity>
            )}

                <TouchableOpacity
                    style={[styles.headerUserBtn]}
                    onPress={onToScreenInfor}>
                    <Image
                        source={iconUser}
                        style={[{width: 25, height: 25}]} />
                </TouchableOpacity>
        </View>
    )
}

export default CommonHeader;