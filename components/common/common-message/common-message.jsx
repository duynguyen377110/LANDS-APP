import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./common-message-style";

import { close } from '../../../store/store-message';

const CommonMessage = (props) => {
    const notify = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(close());
        }, 1500)
    }, [notify.message])

    return (
        <View style={[
            styles.commonMessageContainer,
            notify.message? styles.active : {}
        ]}>
            <Text style={[styles.message]}>{notify.message}</Text>
        </View>
    )
}

export default CommonMessage;