import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from "react-native";
import CommonHeader from "../../common/common-header/common-header";
import { commonStyles } from "../../../styles";
import styles from "./screen-product-detail-style";
import environment from '../../../environment';

let url = `${environment.api.url}${environment.api.product.common.root}`;

const ScreenProductDetail = (props) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        let { id } = props.route.params;

        const calllApi = async () => {
            let urlCategoryDetail = `${url}/${id}`;

            try {
                let res = await fetch(`${url}/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if(!res.ok) throw new Error('Call api unsuccess');

                let { status, product} = await res.json();
                if(status) {
                    setProduct(product);
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

            {product !== null && (
                <View style={[commonStyles.component.wrapperComponent]}>
                    <Image style={[styles.productBanner]} source={{uri: product.thumbs[0]}} />
                    <Text style={styles.productOwner}>{product.productOwner}</Text>

                    <Text style={[styles.titleProduct]}>Ảnh sản phẩm:</Text>
                    <View style={[styles.productThumbs]}>
                        {product.thumbs.length > 0 && product.thumbs.map((thumb, index) => {
                            return (
                                <Image key={index} style={[styles.productThumbsContent]} source={{uri: thumb}} />
                            )
                        })}
                    </View>

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
                                product.price.$numberDecimal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                            } VND</Text>
                        </View>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default ScreenProductDetail;