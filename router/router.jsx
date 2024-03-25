import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import ScreenSignin from "../components/screens/screen-signin/screen-signin";
import ScreenSignup from "../components/screens/screen-signup/screen-signup";
import ScreenDashboard from "../components/screens/screen-dashboard/screen-dashboard";
import ScreenAbout from "../components/screens/screen-about/screen-about";
import { commonStyles } from '../styles';

const Stack = createNativeStackNavigator();

const Router = (props) => {
    const loader = useSelector((state) => state.loader);

    return (
        <React.Fragment>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="signin"
                    component={ScreenSignin} />
                    
                <Stack.Screen
                    options={{headerShown: false}}
                    name='signup'
                    component={ScreenSignup} />

                <Stack.Screen
                    options={{headerShown: false}}
                    name="dashboard"
                    component={ScreenDashboard} />

                <Stack.Screen
                    options={{headerShown: false}}
                    name='about'
                    component={ScreenAbout}/>
            </Stack.Navigator>
            <ActivityIndicator style={[
                commonStyles.loader.loader,
                loader.isLoader? commonStyles.loader.loaderActive : {}
            ]}/>
        </React.Fragment>
    )
}

export default Router;