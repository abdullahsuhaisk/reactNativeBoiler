import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

import { LeagueStack } from "../screens/League/LeagueStack";
import { TopListScreen } from "../screens/TopListScreen";
import { COLORS, FONTS } from "../constants";

export type AppParamList = {
  League: undefined;
  TopListScreen: undefined;
};


interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "League") {
            iconName = "home";
            return <MaterialCommunityIcons name={"home"} size={30} color={color} />;
          } else if (route.name === "TopListScreen") {
            return <MaterialCommunityIcons name={"abjad-arabic"} size={30} color={color} />;
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={30} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: COLORS.selectedIcon,
        inactiveTintColor: COLORS.lightSecondary,
        tabStyle:{

        },
        style: {
          backgroundColor: COLORS.primary,
          shadowRadius:10,
          borderRadius:50,
          borderWidth: 1,
          borderColor: '#fff',
          height: 70,
          marginHorizontal: 10
        },
        labelStyle:{
          ...FONTS.h4,
          paddingBottom:10
        },
        iconStyle: {
          marginTop:5
        }
      }}>
      <Tabs.Screen name="League" component={LeagueStack} />
      <Tabs.Screen name="TopListScreen" component={TopListScreen} />
      {/* <Tabs.Screen name="Auth" component={AuthStack} /> */}
    </Tabs.Navigator>
  );
};