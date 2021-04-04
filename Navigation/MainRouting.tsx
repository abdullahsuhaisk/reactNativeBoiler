import React, { useState } from 'react';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { LeagueDetailScreen, AppIntroContainer, SelectLeagueScreen } from '../screens';

const MainRouting: React.FC<{
  show: boolean,
  setShow: Function
}> = ({ show, setShow }): JSX.Element => {

  type RootStackParamList = {
    AppIntro: undefined;
    Home: { show: Boolean, setShow: () => void };
    LegueScreen: undefined;
  };

  const MainStack = createStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='AppIntro' screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 80
        },
        headerTitle: props => <HeaderLogo {...props} />,
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <MainStack.Screen name="AppIntro" options={{ headerShown: false }}>
          {props => <AppIntroContainer {...props} show={show} setShow={setShow} />}
        </MainStack.Screen>
        <MainStack.Screen name="Home" component={SelectLeagueScreen}
          options={{ title: 'Overview', headerShown: true, headerLeft: null, }} />
        <MainStack.Screen name="LegueScreen" component={LeagueDetailScreen}
          options={({ route }) => ({ title: route.params.title })} />
      </MainStack.Navigator>
    </NavigationContainer>
  )

  function HeaderLogo(props): JSX.Element {
    console.log(props)
    return (
      <View>
        <Text>
          {props.title}
        </Text>
      </View>
    )
  }

}
export default MainRouting;