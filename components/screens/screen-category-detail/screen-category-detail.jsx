import { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";

import CommonHeader from "../../common/common-header/common-header";
import ViewFloatDetail from "../../views/view-float-detail/view-float-detail";

const ScreenCategoryDetail = (props) => {

    useEffect(() => {
        console.log('Category detail');
        console.log(props.route.params);
    }, [])

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation} />
            <ViewFloatDetail />
        </ScrollView>
    )
}

export default ScreenCategoryDetail;