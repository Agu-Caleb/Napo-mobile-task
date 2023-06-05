/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu
 *
 */

import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {enGB} from '../../utils/dictionary';
import styles from '../../styles/App.styles';
interface Rating {
  Source: string;
  Value: string;
}

interface MovieDetail {
  // Other movie details Rating
  Ratings: Rating[];
}

interface Props {
  movieDetail: MovieDetail;
}

export const MovieRating: React.FC<Props> = ({movieDetail}) => {
  return (
    <View>
      <Text style={styles.buttonText}>{enGB.Rating}</Text>
      {movieDetail?.Ratings &&
        movieDetail.Ratings.map((rating, index) => (
          <View
            testID="movieRatingView"
            key={`rating-${index}`}
            accessible
            accessibilityLabel={`${rating?.Source}: ${rating?.Value}`}>
            <Text>{rating.Source}: </Text>
            <View style={styles.ratingsViewContainer}>
              {/* Considered doing a star-based rating system of five stars, but the data is not consistent with the format */}
              <Icon
                name="star"
                size={24}
                color="gold"
                accessible
                accessibilityLabel="Star Icon"
              />
              <Text style={styles.ratingText}>{rating.Value}</Text>
            </View>
          </View>
        ))}
    </View>
  );
};
