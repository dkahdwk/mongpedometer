import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import HomeMainScreen from 'features/home/screens/HomeMainScreen';
import theme from 'styles/theme';

// iOS와 Android에서 화면 전환 시 필요한 처리를 네이티브 코드로 수행하므로, 앱의 화면 전환이 더욱 빠르고 부드러워집니다
enableScreens();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        // backgroundColor: Android 에서만 동작한다.
        backgroundColor={'#Fff'}
        translucent
      />
      <SafeAreaProvider>
        <HomeMainScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
