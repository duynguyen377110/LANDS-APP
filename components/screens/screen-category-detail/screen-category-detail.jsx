import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import environment from "../../../environment";

import CommonHeader from "../../common/common-header/common-header";
import ViewFloatDetail from "../../views/view-float-detail/view-float-detail";
import CommonProductCard from "../../common/common-product-card/common-product-card";
import styles from "./screen-category-detail-style";

const url = `${environment.api.url}${environment.api.category.common.root}`;

const ScreenCategoryDetail = (props) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        let { id } = props.route.params;

        const calllApi = async () => {
            let urlCategoryDetail = `${url}/${id}`;

            try {
                let res = await fetch(urlCategoryDetail, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(!res.ok) throw new Error('Call api unsuccess');

                let { status, category} = await res.json();
                if(status) {
                    setCategory(category);
                }

            } catch (err) {
                console.log(err);

            }
        }

        calllApi();

    }, [])

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation} />

            <ViewFloatDetail
                thumb={category?.thumbs[0]}
                title={category?.title}>

                    <View style={[styles.wrapperProduct]}>
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                        <CommonProductCard />
                    </View>
                </ViewFloatDetail>
        </ScrollView>
    )
}

export default ScreenCategoryDetail;