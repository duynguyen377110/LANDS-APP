import { View, Text } from 'react-native';
import styles from "./common-blank-style";

const CommonBlank = (props) => {

    return (
        <View style={styles.commonBlankContainer}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default CommonBlank;

