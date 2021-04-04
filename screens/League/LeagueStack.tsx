import React, { useContext, useRef, useState, useEffect } from "react"
import { Text, TouchableOpacity, FlatList, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { LeagueDetailScreen, SelectLeagueScreen } from "..";
import { COLORS } from "../../constants";

type LeagueParamList = {
  LeagueScreen: { show: Boolean, setShow: () => void };
  LeagueDetailScreen: undefined;
};

export type LeagueStackNavProps<T extends keyof LeagueParamList> = {
  navigation: StackNavigationProp<LeagueParamList, T>;
  route: RouteProp<LeagueParamList, T>;
};

interface LeagueStackProps { }

const Stack = createStackNavigator<LeagueParamList>();

function HeaderLogo(props): JSX.Element {
  return (
    <View>
      <Text>
        {props.title}
      </Text>
    </View>
  )
}
export const LeagueStack: React.FC<LeagueStackProps> = ({ }) => {
  return (
    <Stack.Navigator initialRouteName='LeagueScreen' screenOptions={{
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
      <Stack.Screen name="LeagueScreen" component={SelectLeagueScreen}
        options={{ title: 'Select League', headerShown: true, headerLeft: null, }} />
      <Stack.Screen name="LeagueDetailScreen" component={LeagueDetailScreen}
        options={({ route }) => ({ headerTitle: route.params.title })} />
    </Stack.Navigator>
  )
}