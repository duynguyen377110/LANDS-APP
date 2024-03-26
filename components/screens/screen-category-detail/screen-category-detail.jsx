import { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";

import CommonHeader from "../../common/common-header/common-header";

const ScreenCategoryDetail = (props) => {

    useEffect(() => {
        console.log('Category detail');
        console.log(props.route.params);
    }, [])

    return (
        <ScrollView>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation} />

            <View>
                <Text>Category detail</Text>
            </View>
        </ScrollView>
    )
}

export default ScreenCategoryDetail;