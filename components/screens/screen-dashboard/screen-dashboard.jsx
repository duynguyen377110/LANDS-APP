import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";

import environment from "../../../environment";
import CommonHeader from "../../common/common-header/common-header";
import CommonBanner from "../../common/common-banner/common-banner";
import CommonProductCard from "../../common/common-product-card/common-product-card";
import CommonListScrollHorizontal from "../../common/common-list/common-list-scroll-horizontal/common-list-scroll-horizontal";
import CommonBlank from "../../common/common-blank/common-blank";
import { commonStyles } from "../../../styles";
import styles from "./screen-dashboard-style";

const dashboardBannerThumb = 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711359072/lands/banner_ximjch.jpg';
const url = `${environment.api.url}${environment.api.category.common.all}`;
const urlProducts = `${environment.api.url}${environment.api.product.common.all}`;

const ScreenDashboard = (props) => {
    
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const getCategories = () => {
        return new Promise(async(resolve, reject) => {
            try {
                let res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(!res.ok) throw new Error('Call api unsuccess');

                let { status, categories} = await res.json();

                if(status) {
                    resolve(categories);
                }

            } catch (error) {
                reject(error);
            }
        })
    }

    const getProducts = () => {
        return new Promise(async(resolve, reject) => {
            try {
                let res = await fetch(urlProducts, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(!res.ok) throw new Error('Call api unsuccess');

                let { status, products} = await res.json();
                
                if(status) {
                    resolve(products);
                }

            } catch (error) {
                reject(error);
            }
        })
    }

    useEffect(() => {
        const calllApi = async () => {
            let [products, categories] = await Promise.allSettled([getProducts(), getCategories()]);

            setCategories(categories.value);
            setProducts(products.value);
        }

        calllApi();

    }, [])

    const onToScreenAboutHandler = (event) => {
        props.navigation.navigate('about');
    }

    const onNavigateDetailCategory = (data) => {
        props.navigation.navigate("category-detail", {id: data._id});
    }

    const onNavigateProductDetail = (event) => {
        props.navigation.navigate('product-detail', {id: event._id});
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={false}
                navigation={props.navigation} />

            <View style={[commonStyles.component.wrapperComponent]}>

                <CommonBanner
                    bannerImage={dashboardBannerThumb}
                    onAbout={onToScreenAboutHandler}/>

                <CommonListScrollHorizontal
                    data={categories}
                    title='Danh mục'
                    onClick={onNavigateDetailCategory}/>

                
                <View style={[styles.wrapperProduct]}>
                    {products.length > 0 && products.map((product) => {
                        return (
                            <CommonProductCard
                                key={product._id}
                                data={product}
                                thumb={product.thumbs[0]}
                                title={product.productOwner}
                                onClick={onNavigateProductDetail}/>
                        )
                    })}
                </View>

                {products.length === 0 && <CommonBlank title="Sản phẩm chưa cập nhật" />}
            </View>
        </ScrollView>
    )
}

export default ScreenDashboard;