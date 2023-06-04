/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Created Date: Sun, 4th Jun 2023, 16:39:38 pm
 * Author: Caleb Agu (caleb.agu@thedistance.co.uk)
 * Copyright (c) 2023 The Distance
 */
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {MoviesHomeScreen} from '../screens/Movies.Home.screen';
import {MovieDetailScreen} from '../screens/Movies.Details.screen';
const AppStack = createStackNavigator();
const forFade = ({current}: {current: {progress: number}}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
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
