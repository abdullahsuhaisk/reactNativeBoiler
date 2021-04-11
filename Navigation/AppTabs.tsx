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
            iconName = "clipboard-list";
            return <MaterialCommunityIcons name="soccer-field" size={30} color={color} />;
          } else if (route.name === "TopListScreen") {
            return <MaterialCommunityIcons name={"clipboard-list"} size={30} color={color} />;
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={"soccer"} size={30} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: COLORS.selectedIcon,
        inactiveTintColor: COLORS.white,
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
        labelStyle: {
          ...FONTS.h4,
          paddingBottom:10
        },
        iconStyle: {
          marginTop:5
        }
      }}>
      <Tabs.Screen name="League" component={LeagueStack} />
      <Tabs.Screen name="TopList" component={TopListScreen} />
      <Tabs.Screen name="Another Scr" component={TopListScreen} />
      {/* <Tabs.Screen name="Auth" component={AuthStack} /> */}
    </Tabs.Navigator>
  );
};