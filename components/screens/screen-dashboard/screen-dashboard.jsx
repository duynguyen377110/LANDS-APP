import { useState } from "react";
import { View, Image } from "react-native";
import CommonCardDashboard from "../../common/common-card/common-card-dashboard/common-card-dashboard";
import styles from "./screen-dashboard.style";

const ScreenDashboard = (props) => {
    const [list, setList] = useState([
        {
            title: 'Nhà đất',
            thumb: "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        },
        {
            title: 'Căn hộ',
            thumb: "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        },
        {
            title: 'Mặt bằng',
            thumb: "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        },
        {
            title: 'Phòng trọ',
            thumb: "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        },
    ])

    return (
        <View style={[styles.screenDashboardContainer]}>
            {list.length > 0 && list.map((elm, index) => {
                return (
                    <CommonCardDashboard
                        title={elm.title}
                        thumb={elm.thumb}/>
                )
            })}
        </View>
    )
}

export default ScreenDashboard;