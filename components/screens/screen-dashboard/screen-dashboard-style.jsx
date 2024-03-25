import { StyleSheet } from "react-native";
import { commonStyles } from "../../../styles";

const styles = StyleSheet.create({
    screenDashboardComponent: {
        paddingHorizontal: 15,
        paddingVertical: 25,
    },
    screenDashboardContainer: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
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
        width: '47%',
    }
})

export default styles;