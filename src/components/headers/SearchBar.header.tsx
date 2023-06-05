/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu (agucaleb@gmail.com)
 *
 */

import React, {MutableRefObject} from 'react';
import styles from '../../styles/App.styles';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {enGB} from '../../utils/dictionary';
import {colours} from '../../styles/colours';

interface SearchBarProps {
  handleSearch: () => void;
  searchTextRef: MutableRefObject<string>;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  handleSearch,
  searchTextRef,
}) => {
  return (
    <View
      style={styles.moviesHeaderViewContainer}
      accessible
      accessibilityLabel="Search Bar">
      <TextInput
        style={styles.searchInput}
        placeholder={enGB.SearchMovies}
        testID="searchInput"
        onSubmitEditing={handleSearch}
        onChangeText={text => (searchTextRef.current = text)}
        placeholderTextColor={colours.simpleBlack}
        accessible
        accessibilityLabel="Search Input"
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleSearch}
        testID="searchButton"
        accessible
        accessibilityLabel="Search Button">
        <Text style={styles.buttonText}>{enGB.SearchButton}</Text>
      </TouchableOpacity>
    </View>
  );
};
