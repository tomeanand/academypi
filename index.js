/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/PiBootstrap';
import {name as appName} from './app.json';
import { enableScreens } from 'react-native-screens';
enableScreens();

AppRegistry.registerComponent(appName, () => App);



// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { name as appName } from './app.json';
// import App from './App';

// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);