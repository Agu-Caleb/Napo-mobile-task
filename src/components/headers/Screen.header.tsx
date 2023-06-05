/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu (agucaleb@gmail.com)
 *
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/App.styles';
import {useNavigation} from '@react-navigation/native';
import {colours} from '../../styles/colours';
import Icon from 'react-native-vector-icons/Ionicons';
type Props = {
  title: string;
  canGoBack?: boolean;
};

export const ScreenHeader: React.FC<Props> = ({title, canGoBack = false}) => {
  const navigate = useNavigation();
  return (
    <View
      style={styles.toolbarContainer}
      accessible
      accessibilityLabel="Screen Header">
      {canGoBack && (
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigate.goBack()}
          accessible
          accessibilityLabel="Go Back">
          <Icon
            name="arrow-back"
            size={24}
            color={colours.simpleBlack}
            accessible
            accessibilityLabel="Arrow Back Icon"
          />
        </TouchableOpacity>
      )}

      <Text style={styles.title} testID="title">
        {title}
      </Text>
    </View>
  );
};
