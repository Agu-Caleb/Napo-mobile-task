/* eslint-disable react-native/no-inline-styles */
/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu
 *
 */
import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../../styles/App.styles';
import {enGB} from '../../utils/dictionary';
import {Movie} from '../../utils/types';

type Props = {
  movieItem: Movie;
  numberOfColumns: number;
  onPressDetail: () => void;
};

export const MovieIssueCard: React.FC<Props> = ({
  movieItem,
  numberOfColumns,
  onPressDetail,
}) => {
  return (
    <View
      testID="movieCardRender"
      style={{
        ...styles.cardContainer,
        //Dynamically restyle based on [numberOfColumns] prop changes
        justifyContent: numberOfColumns > 2 ? 'center' : 'flex-start',
        maxWidth:
          numberOfColumns > 2 ? '32%' : numberOfColumns > 1 ? '50%' : '100%',
      }}
      accessible={true}
      accessibilityLabel="Movie Issue Card">
      <TouchableOpacity
        onPress={onPressDetail}
        accessible={true}
        accessibilityLabel="Press to view movie details">
        <View style={styles.movieCardTextPaddingBottom}>
          <Text
            style={styles.movieCardText}
            accessible={true}
            accessibilityLabel={`Movie Title: ${movieItem?.Title}`}>
            {enGB.MovieTitleText} {movieItem?.Title}
          </Text>
          <Text
            style={styles.movieCardText}
            accessible={true}
            accessibilityLabel={`Movie Year: ${movieItem?.Year}`}>
            {enGB.MovieYearText} {movieItem?.Year}
          </Text>
        </View>
        <Image
          source={{
            uri: movieItem?.Poster,
          }}
          style={styles.movieCardImageStyle}
          accessible={true}
          accessibilityLabel="Movie Poster"
        />
      </TouchableOpacity>
    </View>
  );
};
