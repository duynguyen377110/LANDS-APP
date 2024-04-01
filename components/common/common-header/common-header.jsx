import { View, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styles from "./common-header-style";

const iconBack = require("../../../assets/icons/back-svgrepo-com.png");
const iconUser = require("../../../assets/icons/user-profile-svgrepo-com.png");

const CommonHeader = (props) => {
    const auth = useSelector((state) => state.auth);

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

            <View>
                {auth.email && (<Text>{auth.email}</Text>)}
                <TouchableOpacity
                    style={[styles.headerUserBtn]}
                    onPress={onToScreenInfor}>
                    <Image
                        source={iconUser}
                        style={[{width: 35, height: 35}]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CommonHeader;