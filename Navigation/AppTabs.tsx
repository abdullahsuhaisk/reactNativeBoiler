import React, { useContext } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

import { LeagueStack } from "../screens/League/LeagueStack";
import { TopListScreen } from "../screens/TopListScreen";

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
            return <MaterialCommunityIcons name={"home"} size={size} color={color} />;
          } else if (route.name === "TopListScreen") {
            return <MaterialCommunityIcons name={"abjad-arabic"} size={size} color={color} />;
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }}>
      <Tabs.Screen name="League" component={LeagueStack} />
      <Tabs.Screen name="TopListScreen" component={TopListScreen} />
      {/* <Tabs.Screen name="Auth" component={AuthStack} /> */}
    </Tabs.Navigator>
  );
};