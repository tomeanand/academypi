import React, { useState, useEffect } from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';
import Splashlaunch from '../screens/splash';
import { useSelector } from 'react-redux';


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
  const isLoggedIn = useSelector(state => state.authenticationReducer?.isLoggedIn);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen name="PI" component={Splashlaunch} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />

        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BaseContainer;