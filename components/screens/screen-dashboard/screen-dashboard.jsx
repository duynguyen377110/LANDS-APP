import { useState, useEffect } from "react";
import { View, ScrollView, Text, FlatList } from "react-native";

import environment from "../../../environment";
import CommonHeader from "../../common/common-header/common-header";
import CommonBanner from "../../common/common-banner/common-banner";
import CommonListScrollHorizontal from "../../common/common-list/common-list-scroll-horizontal/common-list-scroll-horizontal";
import styles from "./screen-dashboard-style";

const dashboardBannerThumb = 'https://res.cloudinary.com/ditc3z3gj/image/upload/v1711359072/lands/banner_ximjch.jpg';

const ScreenDashboard = (props) => {
    
    const url = `${environment.api.url}${environment.api.category.common.all}`;
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const calllApi = async () => {
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
                    categories = categories.map((elm) => {
                        elm.thumbs = elm.thumbs.map((thumb) => {
                            thumb = thumb.replace('upload', 'upload/w_200,h_200,c_scale');
                            return thumb;
                        })
                        return elm
                    })
                    setCategories(categories);
                }

            } catch (err) {
                console.log(err);

            }
        }

        calllApi();

    }, [])

    const onToScreenAboutHandler = (event) => {
        props.navigation.navigate('about');
    }

    return (
        <ScrollView style={{backgroundColor: '#ffffff'}}>
            <CommonHeader
                backButtonShow={false}
                navigation={props.navigation} />

            <View style={[styles.screenDashboardComponent]}>

                <CommonBanner
                    bannerImage={dashboardBannerThumb}
                    onAbout={onToScreenAboutHandler}/>

                <CommonListScrollHorizontal
                    data={categories}/>
            </View>
        </ScrollView>
    )
}

export default ScreenDashboard;