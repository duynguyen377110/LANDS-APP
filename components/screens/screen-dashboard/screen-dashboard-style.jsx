import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    screenDashboardContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
    },
    dashboardTab: {
        backgroundColor: commonStyles.common.colorTwo,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'flex-end',
        padding: 15,
        width: '100%'
    }
})

export default styles;