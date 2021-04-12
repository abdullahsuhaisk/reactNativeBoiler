import React, { useContext } from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"
import { Center } from "../../components";
import { Button, Text } from "react-native";
import { AppIntroContainer } from "../";
import { AuthContext } from "./AuthProvider"
import LoginScreen from "./LoginScreen"
import SignupScreen from "./SignupScreen"

export type AuthParamList = {
  Login: undefined;
  Signup: undefined;
  AppIntro: undefined
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

interface AuthStackProps {
  
}

const Stack = createStackNavigator<AuthParamList>()

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} initialRouteName="AppIntro" >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="AppIntro" options={{ headerShown: false }}>
        {props => <AppIntroContainer {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};