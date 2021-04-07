import React from 'react'
import { Center } from '../components';
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, Text } from 'react-native';

interface TopScreenProps {

}

export function TopListScreen ({  }): TopListStackNavProps<"TopListScreen"> {
  return (
    <Center>
      <Text>
        Top list
      </Text>
    </Center>
  );
}

export type TopListParamsList = {
  TopListScreen: undefined;
};

export type TopListStackNavProps<T extends keyof TopListParamsList> = {
  // navigation: StackNavigationProp<TopListParamsList, T>;
  // route: RouteProp<TopListParamsList, T>;
  
};

const Stack = createStackNavigator<TopListParamsList>();

export const TopListStack: React.FC<TopScreenProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName='TopListScreen'>
      <Stack.Screen name="TopListScreen" component={TopListScreen}
        options={{ title: 'Select League', headerShown: true}} />
    </Stack.Navigator>)
}