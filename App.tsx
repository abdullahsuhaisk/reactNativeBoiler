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
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS, SIZES, FONTS, icons, images } from "./constants"
import AppIntroContainer from './screens/AppIntro/AppIntroContainer'
import HomeScreen from './screens/SelectLeagueScreen'
import { Colors } from 'react-native/Libraries/NewAppScreen';

//  const Section: React.FC<{
//    title: string;
//  }> = ({children, title}) => {
//   <Section title="Step One">

const App = () => {
  const [show, setShow] = useState(true);

  //  const isDarkMode = useColorScheme() === 'dark';
  //  isDarkMode ? Colors.darker : Colors.lighter
  console.log(show)
  const Stack = createStackNavigator();
  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  return (
    <>
      <SafeAreaView style={{...styles.safeAreaWrapper, backgroundColor: !show ? COLORS.white : COLORS.primary}}>
        {/* <AppIntroContainer show={show} /> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'AppIntro'}>
            <Stack.Screen name="AppIntro" options={{headerShown: false}}>
              {props => <AppIntroContainer {...props} show={show} setShow={setShow} />}
              </Stack.Screen>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview', headerShown: false }}  />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: COLORS.primary, flex: 1
  }
});

export default App;
