import { SafeAreaView , View, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseChimney, faUser, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import styles from "./screen-dashboard-style";

const ScreenDashboard = (props) => {

    return (
        <SafeAreaView style={[styles.screenDashboardContainer]}>
            <View style={[styles.dashboardTab]}>
                <FontAwesomeIcon icon={faHouseChimney} size={20} color="white" />
                <FontAwesomeIcon icon={faLayerGroup} size={20} color="white" />
                <FontAwesomeIcon icon={faUser} size={20} color="white" />
            </View>
        </SafeAreaView>
    )
}

export default ScreenDashboard;