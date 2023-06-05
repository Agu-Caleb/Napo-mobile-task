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
import {MovieDetail} from '../../utils/types';
import {MovieRating} from '../buttons/starRating.button';

type Props = {
  movieItem: MovieDetail;
};

export const MovieIssueDetailCard: React.FC<Props> = ({movieItem}) => {
  return (
    <View
      testID="movieDetailCard"
      style={styles.detailCardContainer}
      accessible={true}
      accessibilityLabel="Movie Detail Card">
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Movie Detail Card Touchable">
        <View style={styles.movieCardTextPaddingBottom}>
          <Text style={styles.movieCardText}>
            {enGB.MovieTitleText} {movieItem?.Title}
          </Text>
          <Text style={styles.movieCardText}>
            {enGB.MovieYearText} {movieItem?.Year}
          </Text>
          <Text style={styles.movieCardText}>
            {enGB.MovieReleaseText} {movieItem?.Released}
          </Text>
        </View>
        <Image
          testID="moviePoster"
          source={{
            uri: movieItem?.Poster,
          }}
          style={styles.movieDetailCardImageStyle}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel="Movie Poster"
        />

        <Text
          style={styles.moviePlotText}
          accessible={true}
          accessibilityLabel="Movie Plot">
          {movieItem?.Plot}
        </Text>
        <MovieRating movieDetail={movieItem} />
      </TouchableOpacity>
    </View>
  );
};
