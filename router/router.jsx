import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScreenSignin from "../components/screens/screen-signin/screen-signin";
import ScreenDashboard from "../components/screens/screen-dashboard/screen-dashboard";

const Stack = createNativeStackNavigator();

const Router = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{headerShown: false}}
                name="signin"
                component={ScreenSignin} />
            <Stack.Screen
                options={{title: 'Dashboard'}}
                name="dashboard"
                component={ScreenDashboard}/>
        </Stack.Navigator>
    )
}

export default Router;