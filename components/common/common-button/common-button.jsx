import { TouchableOpacity, Text } from "react-native";
import { commonStyles } from "../../../styles";

const CommonButton = (props) => {

    return (
        <TouchableOpacity
            onPress={props.click}
            style={[
                commonStyles.button.normal,
                props.width === 'full'? commonStyles.button.full : {}
            ]}>
            <Text style={[commonStyles.button.title]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton;