import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import styles from "./common-list-scroll-horizontal-style";

import { setCurrentItem } from "../../../../store/store-list-scroll-horizontal";

const CommonListScrollHorizontal = (props) => {
    const listScrollHorizontal = useSelector((state) => state.listScrollHorizontal);
    const dispatch = useDispatch();

    useEffect(() => {
        if(props.data.length) {
            if(!listScrollHorizontal.currentItem) {
                dispatch(setCurrentItem({key: props.data[0]?._id}));
            }
        }
    }, [listScrollHorizontal.currentItem])
    
    const onClickHandler = (data) => {
        dispatch(setCurrentItem({key: data?._id}));
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
                            <View style={[
                                styles.viewWrapper,
                                listScrollHorizontal.currentItem === elm.item?._id? styles.viewWrapperActive: {}
                            ]}>
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