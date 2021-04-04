import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { COLORS } from "./constants"
import { AppTabs } from './Navigation/AppTabs';
import { AuthProvider, AuthContext } from './screens/Authentication/AuthProvider'
import { AuthStack } from './screens/Authentication/AuthStack';
import { _retrieveData } from './utils';

const App = (): JSX.Element => {
  const [showAppIntro, setShowAppIntro] = useState(true);
  const { user, login } = useContext(AuthContext);
  console.log(user)
  useEffect(() => {
    _retrieveData("user").then((user) => {
      setShowAppIntro(false);
    })
  }, []);

  return (
    <>
      <AuthProvider>
        <SafeAreaView style={{ ...styles.safeAreaWrapper, backgroundColor:  COLORS.primary }}>
          <NavigationContainer>
            { showAppIntro ? <AuthStack /> : <AppTabs /> }
          </NavigationContainer>
        </SafeAreaView>
      </AuthProvider>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: COLORS.primary, flex: 1
  }
});

export default App;
