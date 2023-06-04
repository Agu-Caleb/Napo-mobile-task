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
  title: {
    fontSize: 24,
    fontWeight: '600',
  },

  monthsSwitchText: {
    fontSize: 14,
    fontWeight: '400',
    paddingRight: 10,
    paddingTop: 8,
  },
  magazineCardText: {
    fontSize: 16,
    fontWeight: '400',
  },
  filterTitleText: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 15,
  },
  footerText: {
    fontSize: 14,
    fontWeight: '600',
  },

  toolbarContainer: {
    shadowColor: colours.simpleBlack,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 4,
    zIndex: 9,
    justifyContent: 'center',

    height: Platform.select({
      android: 80,
      ios: 60,
    }),
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'flex-start',
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
  },
  magazineCardTextPaddingBottom: {
    paddingBottom: 10,
  },
  magazineCardImageStyle: {width: 300, height: 220},
  listContainer: {
    marginBottom: 15,
  },
  magazineHeaderViewContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'column',
  },
  magazineHeaderSwitchSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  magazineHeaderItemsContainer: {flexDirection: 'row', paddingBottom: 10},
  magazineFooterTextContainer: {
    paddingTop: 20,
    alignSelf: 'center',
  },
});
