import { ScrollView, View, Text } from "react-native";
import CommonHeader from "../../common/common-header/common-header";

const ScreenInformation = (props) => {

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation}/>

            <View>
                <Text>Screen Information</Text>
            </View>
        </ScrollView>
    )
}

export default ScreenInformation;