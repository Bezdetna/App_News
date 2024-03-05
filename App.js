import React, { useState } from 'react';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading'

import MainStack from './navigate';


const fonts = () => Font.loadAsync({
  'ps-bold': require('./assets/fonts/PontanoSans-Bold.ttf'),
  'ps-semi-bold': require('./assets/fonts/PontanoSans-SemiBold.ttf'),
  'rs-regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
  'rs-semi-bold': require('./assets/fonts/RobotoSlab-SemiBold.ttf')

});

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    );
  }
};
