import { ScrollView, View, Text } from "react-native";

import CommonHeader from "../../common/common-header/common-header";
import styles from "./screen-about-style";

const ScreenAbout = (props) => {


    const onBackScreenHandler = (event) => {
        console.log('Text');
        props.navigation.goBack();
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader onBackScreen={onBackScreenHandler} />

            <View style={[styles.screenAboutComponent]}>
                <View style={[styles.aboutPoster]}>
                    <Text>Back</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ScreenAbout;