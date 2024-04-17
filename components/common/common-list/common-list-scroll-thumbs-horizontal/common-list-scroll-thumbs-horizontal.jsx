import { Text, FlatList, View, TouchableOpacity, Image } from 'react-native';
import styles from "./common-list-scroll-thumbs-horizontal-style";

const CommonListScrollThumbsHorizontal = (props)=> {

    return (
        <View style={[styles.list_scroll_thumb_horizontal_container]}>
            <FlatList
                data={props.thumbs}
                horizontal
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(elm) => {
                    return (
                        <TouchableOpacity
                            onPress={(event) => props.click(elm.item)}
                            style={[styles.thumb_wrapper_img]}>
                            <Image style={[styles.thumb_img]} source={{uri: elm.item}} />
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item._id} />
        </View>
    )
}

export default CommonListScrollThumbsHorizontal;