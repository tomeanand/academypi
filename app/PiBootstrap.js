import * as React from 'react';

import PiStyles from './utils/PiStyles';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { configureFonts, MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import BaseContainer from './navigation/index';
import FontConfig from './utils/FontConfig';


const pitheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: PiStyles.color.COLOR_PRIMARY,
    accent: PiStyles.color.COLOR_SECONDARY,
    background: PiStyles.color.COLOR_BG,
  },
  fonts: configureFonts({ config: FontConfig}),
};



const PiBootstrap = () => {
  return (
    <PaperProvider theme={pitheme}>
      <BaseContainer />
    </PaperProvider>
  );
}

export default PiBootstrap;
