/**
 * @format
 */

import 'react-native';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {MoviesHomeScreen} from '../../screens/Movies.Home.screen';
import {NavigationContainer} from '@react-navigation/native';
import {MoviesDataProvider} from '../../hooks/dataHandler';
import {MovieDetailScreen} from '../../screens/Movies.Details.screen';
import {enGB} from '../../utils/dictionary';
import {MovieIssueDetailCard} from '../cards/movieIssueDetail.card';
jest.useFakeTimers();
// mocking the added third party package
jest.mock('react-native-device-info', (): any => ({
  isTablet: jest.fn(),
}));
jest.mock(
  'react-native-vector-icons/FontAwesome',
  () => 'MockedMaterialCommunityIcons',
);
jest.mock(
  'react-native-vector-icons/Ionicons',
  () => 'MockedMaterialCommunityIcons',
);

const WrapperComponent = () => (
  <NavigationContainer>
    <MoviesDataProvider>
      <MoviesHomeScreen />
      <MovieDetailScreen />
    </MoviesDataProvider>
  </NavigationContainer>
);

describe('MoviesHomeScreen', () => {
  test('should render correctly', () => {
    const {getByTestId} = render(<WrapperComponent />);
    const mainScreenContainer = getByTestId('mainScreenContainer');
    expect(mainScreenContainer).toBeDefined();
  });

  test('should trigger search', () => {
    //check if search works
    const {getByTestId} = render(<WrapperComponent />);
    const searchInput = getByTestId('searchInput');
    const searchButton = getByTestId('searchButton');

    fireEvent.changeText(searchInput, 'avengers');
    fireEvent.press(searchButton);
  });
});

describe('testing if flatlist scrolls and displays all data, output to the log', () => {
  it('should scroll flatlist', async () => {
    const {debug, getByTestId} = render(<WrapperComponent />);

    fireEvent.scroll(getByTestId('moviesFlatlist'), {
      nativeEvent: {
        contentSize: {height: 600, width: 400},
        layoutMeasurement: {height: 100, width: 100},
        contentOffset: {y: 150, x: 0},
      },
    });

    debug();
  });
});
describe('testing if screen is empty ', () => {
  test('should set initial load state', () => {
    const {getByTestId, getByText} = render(<WrapperComponent />);
    const mainScreenContainer = getByTestId('mainScreenContainer');
    const emptyText = getByText(enGB.EmptyData);

    expect(mainScreenContainer).toBeDefined();
    expect(emptyText).toBeTruthy();
  });
});

describe('Render MovieIssueDetailCard showing movie details', () => {
  const mockMovieItem = {
    Title: 'Avengers: Endgame',
    Year: '2019',
    Released: '2019-04-26',
    Poster: 'https://example.com/poster.jpg',
    Plot: 'The plot of the movie',
    Ratings: [
      {Source: 'IMDb', Value: '8.4/10'},
      {Source: 'Rotten Tomatoes', Value: '94%'},
    ],
    imdbID: '',
    Type: '',
    Response: '',
  };

  it('should render the movie detail card with the correct information', async () => {
    const {findByText, findByTestId, getByTestId, getAllByTestId} = render(
      <MovieIssueDetailCard movieItem={mockMovieItem} />,
    );

    // Check if the movie detail card is rendered
    const movieDetailCard = await findByTestId('movieDetailCard');
    expect(movieDetailCard).toBeTruthy();

    // Check if the movie title is rendered with the correct value
    const movieTitle = await findByText(
      `${enGB.MovieTitleText} ${mockMovieItem.Title}`,
    );
    expect(movieTitle).toBeTruthy();

    // Check if the movie year is rendered with the correct value
    const movieYear = await findByText(
      `${enGB.MovieYearText} ${mockMovieItem.Year}`,
    );
    expect(movieYear).toBeTruthy();

    // Check if the movie release date is rendered with the correct value
    const movieReleased = await findByText(
      `${enGB.MovieReleaseText} ${mockMovieItem.Released}`,
    );
    expect(movieReleased).toBeTruthy();

    // Check if the movie poster image is rendered
    const moviePoster = getByTestId('moviePoster');
    expect(moviePoster).toBeTruthy();
    expect(moviePoster.props.source.uri).toBe(mockMovieItem.Poster);

    // Check if the movie plot is rendered with the correct value
    const moviePlot = await findByText(`${mockMovieItem.Plot}`);
    expect(moviePlot).toBeTruthy();

    // Check if the MovieRating component is rendered
    const movieRatings = getAllByTestId('movieRatingView');
    expect(movieRatings.length).toBe(mockMovieItem.Ratings.length);
  });
});
