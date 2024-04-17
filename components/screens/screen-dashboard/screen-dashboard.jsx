import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch } from "react-redux";

import { toggle } from "../../../store/store-load-banner";

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
    const dispath = useDispatch();
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

                let { status, metadata} = await res.json();

                if(status) {
                    let { categories } = metadata;
                    resolve(categories);
                }

            } catch (error) {
                reject({status: false});
            }
        })
    }

    const getProducts = () => {
        dispath(toggle())
        return new Promise(async(resolve, reject) => {
            try {
                let res = await fetch(urlProducts, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(!res.ok) throw new Error('Call api unsuccess');

                let { status, metadata} = await res.json();
                
                if(status) {
                    let { products } = metadata;
                    resolve(products);
                }

            } catch (error) {
                reject({status: false});
            }
            dispath(toggle())
        })
    }

    useEffect(() => {
        const calllApi = async () => {
            let [categories, products] = await Promise.allSettled([getCategories(), getProducts()]);

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