import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    common_load_banner_container: {
        backgroundColor: commonStyles.common.bgCommon,
        display: 'none',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        left: 0,
        height: "100%",
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 2,
    },
    active: {
        display: 'flex',
    },
    loader_logo: {
        height: 80,
        width: 80,
    },
})

export default styles;