import { useState, useEffect } from "react";
import { View, ScrollView, Text, FlatList } from "react-native";

import environment from "../../../environment";
import CommonBanner from "../../common/common-banner/common-banner";
import CommonCardDashboard from "../../common/common-card/common-card-dashboard/common-card-dashboard";
import styles from "./screen-dashboard-style";

const ScreenDashboard = (props) => {
    
    const url = `${environment.api.url}${environment.api.category.all}`;
    const [categories, setCategories] = useState([]);
    const [bannerImage, setBannerImage] = useState('https://res.cloudinary.com/ditc3z3gj/image/upload/v1711359072/lands/banner_ximjch.jpg')

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
            <View style={[styles.screenDashboardComponent]}>

                <CommonBanner
                    bannerImage={bannerImage}
                    onAbout={onToScreenAboutHandler}/>

                {/* <View style={[styles.screenDashboardContainer]}>
                    {categories.length > 0 && categories.map((elm) => {
                        return (
                            <CommonCardDashboard
                                key={elm._id}
                                title={elm.title}
                                thumb={elm.thumbs[0]}/>
                        )
                    })}
                </View> */}
            </View>
        </ScrollView>
    )
}

export default ScreenDashboard;