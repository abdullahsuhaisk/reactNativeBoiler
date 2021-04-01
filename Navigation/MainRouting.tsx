import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LeagueDetailScreen, AppIntroContainer, SelectLeagueScreen } from '../screens';

const MainRouting: React.FC<{
    show: boolean,
    setShow: Function
}>  = ({show,setShow}) : JSX.Element => {

    type RootStackParamList = {
        AppIntro: undefined;
        Home: { show: Boolean, setShow:()=> void };
        LegueScreen: undefined;
      };

    const MainStack = createStackNavigator<RootStackParamList>()

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName='AppIntro'>
                <MainStack.Screen name="AppIntro" options={{ headerShown: false }}>
                    {props => <AppIntroContainer {...props} show={show} setShow={setShow} />}
                </MainStack.Screen>
                <MainStack.Screen name="Home" component={SelectLeagueScreen} options={{ title: 'Overview', headerShown: false }} />
                <MainStack.Screen name="LegueScreen" component={LeagueDetailScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    )

}
export default MainRouting;