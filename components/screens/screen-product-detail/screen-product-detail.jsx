import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from "react-native";
import { useDispatch } from 'react-redux';

import { toggle } from "../../../store/store-load-banner";
import environment from '../../../environment';

import CommonHeader from "../../common/common-header/common-header";
import CommonListScrollThumbsHorizontal from "../../common/common-list/common-list-scroll-thumbs-horizontal/common-list-scroll-thumbs-horizontal";
import { commonStyles } from "../../../styles";

import styles from "./screen-product-detail-style";

let url = `${environment.api.url}${environment.api.product.common.root}`;

const ScreenProductDetail = (props) => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [thumb, setThumb] = useState('');

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
                    let { product } = metadata;
                    setProduct(product);
                    setThumb(product.thumbs[0]);
                }

            } catch (err) {
                console.log(err);

            }
            dispatch(toggle());
        }
        calllApi();

    }, [])

    const onChangeThumb = (event) => {
        setThumb(event);
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={true}
                navigation={props.navigation} />

            {product !== null && (
                <View style={[commonStyles.component.wrapperComponent]}>
                    <Image style={[styles.productBanner]} source={{uri: thumb}} />
                    <Text style={styles.productOwner}>{product.productOwner}</Text>

                    <Text style={[styles.titleProduct]}>Ảnh sản phẩm:</Text>
                    <CommonListScrollThumbsHorizontal
                        click={onChangeThumb}
                        thumbs={product.thumbs}/>

                    <Text style={[styles.titleProduct]}>Thông tin sản phẩm:</Text>
                    <View style={[styles.productInfor]}>
                        <View style={[styles.productInforRow]}>
                            <Text style={[styles.productInforTitle]}>Ngày đăng</Text>
                            <Text style={[styles.productInforContent]}>{new Date(product.createdAt).toLocaleDateString()}</Text>
                        </View>

                        <View style={[styles.productInforRow]}>
                            <Text style={[styles.productInforTitle]}>Địa chỉ</Text>
                            <Text style={[styles.productInforContent]}>{product.address}</Text>
                        </View>

                        <View style={[styles.productInforRow]}>
                            <Text style={[styles.productInforTitle]}>Liên hệ</Text>
                            <Text style={[styles.productInforContent]}>{product.contact}</Text>
                        </View>

                        <View style={[styles.productInforRow]}>
                            <Text style={[styles.productInforTitle]}>Diện tích</Text>
                            <Text style={[styles.productInforContent]}>{product.landArea}</Text>
                        </View>

                        <View style={[styles.productInforRow, {borderBottomWidth: 0}]}>
                            <Text style={[styles.productInforTitle]}>Giá đề xuất</Text>
                            <Text style={[styles.productInforContent]}>{
                                product.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                            } VND</Text>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default ScreenProductDetail;