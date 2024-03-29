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
                    console.log(product);
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
                </View>
            )}
        </ScrollView>
    )
}

export default ScreenProductDetail;