import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    screenDashboardContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 35,
        width: '100%',
    },
    dashboardCard: {
        backgroundColor: 'red',
        borderRadius: 5,
        overflow: 'hidden',
        width: '45%'
    },
    dashboardCardImage: {
        height: 130,
        width: '100%',
    }
})

export default styles;