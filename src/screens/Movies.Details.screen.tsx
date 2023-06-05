/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu
 *
 */

import React from 'react';
import {View, ScrollView, Text, ActivityIndicator} from 'react-native';
import styles from '../styles/App.styles';
import {ScreenHeader} from '../components/headers/Screen.header';
import {enGB} from '../utils/dictionary';
import {MovieIssueDetailCard} from '../components/cards/movieIssueDetail.card';
import {colours} from '../styles/colours';
import {useMoviesDataHook} from '../hooks/dataHandler';

export const MovieDetailScreen: React.FC = () => {
  // Instantiate global states
  const {movieDetail} = useMoviesDataHook();

  return (
    <>
      <ScreenHeader title={enGB.AppTitle} canGoBack={true} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="Movie Detail Scroll View">
        <View
          style={styles.detailScreenContainer}
          testID="detailScreenContainer"
          accessibilityLabel="Main Screen Container">
          {movieDetail && movieDetail.Response === 'True' ? (
            <MovieIssueDetailCard movieItem={movieDetail} />
          ) : movieDetail ? (
            <View style={styles.errorContainer}>
              <Text
                style={styles.emptyListStyle}
                accessibilityLabel="Unexpected Error">
                {enGB.UnexpectedError}
              </Text>
            </View>
          ) : (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="large"
                color={colours?.darkBlue}
                accessibilityLabel="Loading Indicator"
              />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};
