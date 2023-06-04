/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu (agucaleb@gmail.com)
 *
 */

import React from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/App.styles';
type Props = {
  title: string;
};

export const ScreenHeader: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.toolbarContainer}>
      <Text style={styles.title} testID="title">
        {title}
      </Text>
    </View>
  );
};
