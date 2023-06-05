import {StyleSheet} from 'react-native';
import {colours} from './colours';
import {Platform} from 'react-native';

export default StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  mainScreenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  detailScreenContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  ratingsViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: colours.darkBlue,
    borderWidth: 2,
    padding: 8,
    borderRadius: 8,
    marginRight: 10, // Add some margin to separate the TextInput and Button
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: colours.darkBlue,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 40,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  movieCardText: {
    fontSize: 16,
    fontWeight: '400',
  },
  moviePlotText: {
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 10,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '400',
    marginLeft: 5,
    paddingLeft: 10,
  },

  toolbarContainer: {
    flexDirection: 'row',
    shadowColor: colours.simpleBlack,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 4,
    zIndex: 9,
    height: Platform.select({
      android: 80,
      ios: 60,
    }),
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  backIcon: {
    paddingRight: 20,
  },

  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    backgroundColor: colours.dullWhite,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 7,
    shadowColor: colours.simpleBlack,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 4,
    zIndex: 9,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },

  detailCardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    backgroundColor: colours.dullWhite,
    marginRight: 5,
    marginLeft: 5,
    borderRadius: 7,
    shadowColor: colours.simpleBlack,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 4,
    zIndex: 9,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  movieCardTextPaddingBottom: {
    paddingBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieCardImageStyle: {width: 300, height: 220},
  movieDetailCardImageStyle: {height: 220, width: undefined},
  listContainer: {
    marginBottom: 15,
  },
  moviesHeaderViewContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 50,
  },
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
