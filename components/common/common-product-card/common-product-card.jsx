import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./common-product-card-style";

const image = `https://res.cloudinary.com/ditc3z3gj/image/upload/v1711528658/lands-test/product_4_whupfo.jpg`;

const CommonProductCard = (props) => {

    return (
        <TouchableOpacity style={[styles.wrapper]}>
            <Image style={[styles.productThumb]} source={{uri: image}} />

            <View style={[styles.productInfor]}>
                <Text style={[styles.name]}>Căn hộ khu đô thị mới vinhomes central park</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CommonProductCard;