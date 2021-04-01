import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { COLORS } from "./constants"
import MainRouting from './Navigation/MainRouting';

const App = () : JSX.Element => {
  const [showAppIntro, setShowAppIntro] = useState(true);
  //  const isDarkMode = useColorScheme() === 'dark';
  //  isDarkMode ? Colors.darker : Colors.lighter
  // console.log(showAppIntro)
  return (
    <>
      <SafeAreaView style={{...styles.safeAreaWrapper, backgroundColor: !showAppIntro ? COLORS.white : COLORS.primary}}>
        <MainRouting show={showAppIntro} setShow={setShowAppIntro} />
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
