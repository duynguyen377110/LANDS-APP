import { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./screen-dashboard-style";

const ScreenDashboard = (props) => {
    const [list, setList] = useState([
        "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg",
        "https://res.cloudinary.com/ditc3z3gj/image/upload/w_200,h_200,c_scale/v1711017633/lands/dashboard/pexels-oesch-jonathan-10420282_fhhpzh.jpg"
    ])

    return (
        <View style={[styles.screenDashboardContainer]}>
            {list.length > 0 && list.map((img) => {
                return (
                    <View style={[styles.dashboardCard]}>
                        <Image style={[styles.dashboardCardImage]} source={{uri: img}}/>
                    </View>
                )
            })}
        </View>
    )
}

export default ScreenDashboard;