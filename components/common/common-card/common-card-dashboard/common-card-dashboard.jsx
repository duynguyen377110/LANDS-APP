import { TouchableOpacity, Image, View, Text } from 'react-native';
import styles from "./common-card-dashboard.style";

const CommonCardDashboard = (props) => {
    return (
        <TouchableOpacity style={[styles.container]}>
            <Image style={[styles.cardThumb]} source={{uri: props.thumb}}/>
            <View style={[styles.cardInfor]}>
                <Text style={[styles.cardTitle]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CommonCardDashboard;