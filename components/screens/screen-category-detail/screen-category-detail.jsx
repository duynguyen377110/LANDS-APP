import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";

import { toggle } from "../../../store/store-load-banner";
import environment from "../../../environment";

import CommonHeader from "../../common/common-header/common-header";
import ViewFloatDetail from "../../views/view-float-detail/view-float-detail";
import CommonProductCard from "../../common/common-product-card/common-product-card";
import CommonBlank from "../../common/common-blank/common-blank";
import styles from "./screen-category-detail-style";

const url = `${environment.api.url}${environment.api.category.common.root}`;

const ScreenCategoryDetail = (props) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState(null);

    useEffect(() => {
        let { id } = props.route.params;

        const calllApi = async () => {
            dispatch(toggle());
            
            try {
                let res = await fetch(`${url}/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(!res.ok) throw new Error('Call api unsuccess');

                let { status, metadata} = await res.json();
                if(status) {
                    let { category } = metadata;
                    setCategory(category);
                }

            } catch (err) {
                console.log(err);

            }
            dispatch(toggle())
        }

        calllApi();

    }, [])

    const onNavigateProductDetail = (event) => {
        props.navigation.navigate('product-detail', {id: event._id});
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation} />

            <ViewFloatDetail
                thumb={category?.thumbs[0]}
                title={category?.title}>

                    <View style={[styles.wrapperProduct]}>
                        {category?.products?.length > 0 && category?.products?.map((product) => {
                            return (
                                <CommonProductCard
                                    key={product._id}
                                    data={product}
                                    thumb={product.thumbs[0]}
                                    title={product.productOwner}
                                    onClick={onNavigateProductDetail}/>
                            )
                        })}

                        {category?.products?.length === 0 && <CommonBlank title='Sản phẩm chưa cập nhật!!' />}
                    </View>
                </ViewFloatDetail>
        </ScrollView>
    )
}

export default ScreenCategoryDetail;