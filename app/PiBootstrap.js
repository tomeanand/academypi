import * as React from 'react';
import {  Provider as PaperProvider } from 'react-native-paper';
import BaseContainer from './navigation/index';
import { PaperThemeDefault } from './utils/ThemeConfig';
import store from './store/index';
import { Provider as StoreProvider } from 'react-redux';
  



const PiBootstrap = () => {
  return (
    <StoreProvider store={store}>
    <PaperProvider theme={PaperThemeDefault}>
      <BaseContainer />
    </PaperProvider>
     </StoreProvider>
  );
}

export default PiBootstrap;
