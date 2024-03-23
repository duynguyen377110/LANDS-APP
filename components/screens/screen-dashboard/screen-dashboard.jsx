import { useState, useEffect } from "react";
import { View, Image } from "react-native";

import environment from "../../../environment";
import CommonCardDashboard from "../../common/common-card/common-card-dashboard/common-card-dashboard";
import styles from "./screen-dashboard.style";

const ScreenDashboard = (props) => {
    
    const url = `${environment.api.url}${environment.api.category.all}`;
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

    return (
        <View style={[styles.screenDashboardContainer]}>
            {categories.length > 0 && categories.map((elm) => {
                return (
                    <CommonCardDashboard
                        title={elm.title}
                        thumb={elm.thumbs[0]}/>
                )
            })}
        </View>
    )
}

export default ScreenDashboard;