/* eslint-disable react/no-unstable-nested-components */
/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Author: Caleb Agu
 *
 */

import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Keyboard,
} from 'react-native';
import styles from '../styles/App.styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenHeader} from '../components/headers/Screen.header';
import {enGB} from '../utils/dictionary';
import Device from 'react-native-device-info';
import {MovieIssueCard} from '../components/cards/movieIssue.card';
import {useMoviesDataHook} from '../hooks/dataHandler';
import {SearchBar} from '../components/headers/SearchBar.header';

export const MoviesHomeScreen: React.FC = () => {
  //instantiate global states
  const {moviesData, fetchMovie, page, setPage, fetchMovieDetail} =
    useMoviesDataHook();
  //`dimensions Hook
  const {height, width} = useWindowDimensions();
  // check if device is tablet
  const isTablet = Device.isTablet();
  //local states
  const [numberOfColumns, setNumberOfColumns] = useState(1);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const navigation = useNavigation();
  const searchTextRef = useRef('');
  // ** ** USEEFFECTS ** ** **
  //satisfying device constraints for [tablets, portrait, landscape]
  /* Since the useDimensions is a hook, it means we will get updated values everytime there is a screen orientation change,
    I added those changes as a dependency in a useEffect hook so screen will adjust instanlty with the changes
    */
  useEffect(() => {
    if (isTablet) {
      //tablet device
      setNumberOfColumns(3);
    } else if (width > height && !isTablet) {
      //landcsape orientation
      setNumberOfColumns(2);
    } else {
      // portrait orientation
      setNumberOfColumns(1);
    }
  }, [height, isTablet, width]);

  useEffect(() => {
    // Set initial load complete when moviesData is initially populated
    if (moviesData !== null && !initialLoadComplete) {
      setInitialLoadComplete(true);
    }
  }, [moviesData, initialLoadComplete]);

  // ** ** FUNCTIONS ** ** **
  //Search for movies
  const handleSearch = () => {
    Keyboard.dismiss();
    fetchMovie(searchTextRef?.current);
  };

  //Navigate to detail page
  const navigateToDetails = async (imdbID: string) => {
    await fetchMovieDetail(imdbID);
    navigation.navigate('MovieDetail');
  };

  //  add next page data
  const loadMore = useCallback(
    (nextPage: number) => {
      if (initialLoadComplete) {
        fetchMovie(searchTextRef?.current, nextPage);
        setPage(nextPage);
      }
    },
    [fetchMovie, initialLoadComplete, setPage],
  );

  // ** ** RENDER ** ** **
  //View rendered when there is no data for the list
  const renderEmpty = () => {
    return (
      <Text style={styles.emptyListStyle} testID="emptyText">
        {enGB.EmptyData}
      </Text>
    );
  };

  //   //** Render component to present movie issues*/
  const MovieListItem = ({item}: {item: any}): any => {
    return (
      <MovieIssueCard
        movieItem={item}
        numberOfColumns={numberOfColumns}
        onPressDetail={() => navigateToDetails(item?.imdbID)}
      />
    );
  };

  return (
    <>
      <ScreenHeader title={enGB.AppTitle} />
      <View style={styles.mainScreenContainer} testID="mainScreenContainer">
        <SearchBar handleSearch={handleSearch} searchTextRef={searchTextRef} />
        <FlatList
          testID="moviesFlatlist"
          data={moviesData}
          key={numberOfColumns}
          keyExtractor={(item, index): string => `${index}-${item}`}
          renderItem={MovieListItem}
          showsVerticalScrollIndicator={false}
          numColumns={numberOfColumns}
          style={styles.listContainer}
          onEndReached={() => loadMore(page + 1)}
          ListEmptyComponent={renderEmpty}
          accessibilityLabel="Movies List"
        />
      </View>
    </>
  );
};
