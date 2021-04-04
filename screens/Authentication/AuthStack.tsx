import React, { useContext } from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"
import { Center } from "../../components";
import { Button, Text } from "react-native";
import { AppIntroContainer } from "../";
import { AuthContext } from "./AuthProvider"

export type AuthParamList = {
  Login: undefined;
  Register: undefined;
  AppIntro: undefined
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

interface AuthStackProps {
  
}

const Stack = createStackNavigator<AuthParamList>()

function Login({ navigation }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          login();
          // navigation.navigate('Register')
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Center>
  );
}

function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      />
    </Center>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} initialRouteName="AppIntro">
      <Stack.Screen options={{ headerTitle: "Sign In" }} name="Login" component={Login} />
      <Stack.Screen options={{ headerTitle: "Sign Up" }} name="Register" component={Register} />
      <Stack.Screen name="AppIntro" options={{ headerShown: false }}>
        {props => <AppIntroContainer {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};