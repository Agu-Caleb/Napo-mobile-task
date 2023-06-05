/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu
 *
 */
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MoviesHomeScreen} from '../screens/Movies.Home.screen';
import {MovieDetailScreen} from '../screens/Movies.Details.screen';
const AppStack = createStackNavigator();
const forFade = ({current}: {current: {progress: number}}) => ({
  //fade effect in react native to behave like native transition
  cardStyle: {
    opacity: current.progress,
  },
});

// Navigation handler container for the two screens

export const NavigationController = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={() => ({
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        })}>
        <AppStack.Screen
          name="MovieHome"
          component={MoviesHomeScreen}
          options={{
            cardStyleInterpolator: forFade,
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{
            cardStyleInterpolator: forFade,
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
