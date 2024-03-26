import { Fragment } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styles from "./common-list-scroll-horizontal-style";

const CommonListScrollHorizontal = (props) => {
    
    const onClickHandler = (data) => {
        props.onClick(data);
    }

    return (
        <Fragment>
            <Text style={[styles.title]}>{props.title}</Text>
            <FlatList
                style={[styles.listScrollComponent]}
                data={props.data}
                horizontal
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(elm) => {
                    return (
                        <TouchableOpacity
                            onPress={(event) => onClickHandler(elm.item)}>
                            <View style={[styles.viewCategory]}>
                                <Text style={[styles.viewTitle]}>{elm.item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item._id} />
        </Fragment>
    )
}

export default CommonListScrollHorizontal;