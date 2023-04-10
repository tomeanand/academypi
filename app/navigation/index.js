import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import Splashlaunch from '../screens/splash';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function BaseContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PI" component={Splashlaunch} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BaseContainer;