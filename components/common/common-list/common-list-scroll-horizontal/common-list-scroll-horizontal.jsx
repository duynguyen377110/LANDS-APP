import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styles from "./common-list-scroll-horizontal-style";

const CommonListScrollHorizontal = (props) => {

    return (
        <FlatList
            style={[styles.listScrollComponent]}
            data={props.data}
            horizontal
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={(elm) => {
                return (
                    <TouchableOpacity>
                        <View style={[styles.viewCategory]}>
                            <Text>{elm.item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}
            keyExtractor={(item) => item._id} />
    )
}

export default CommonListScrollHorizontal;