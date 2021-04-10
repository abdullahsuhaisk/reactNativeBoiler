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
  const { user, login, getUser } = useContext(AuthContext);
  useEffect(() => {
    _retrieveData("user").then(( )=> {
      setShowAppIntro(false)
    })
  }, [user]);

  return (
    <>
      <AuthProvider>
        <SafeAreaView style={{ ...styles.safeAreaWrapper, backgroundColor: COLORS.primary }} />
          <SafeAreaView style={{ flex:1, backgroundColor: COLORS.white }}>
          <NavigationContainer>
            {showAppIntro ? <AuthStack /> : <AppTabs />}
          </NavigationContainer>
        </SafeAreaView>
      </AuthProvider>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: COLORS.primary, flex: 0
  }
});

export default App;
