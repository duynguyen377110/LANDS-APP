import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./common-product-card-style";

const CommonProductCard = (props) => {

    return (
        <TouchableOpacity
            style={[styles.wrapper]}
            onPress={(event) => props.onClick(props.data)}>
            <Image style={[styles.productThumb]} source={{uri: props.thumb}} />

            <View style={[styles.productInfor]}>
                <Text style={[styles.name]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CommonProductCard;