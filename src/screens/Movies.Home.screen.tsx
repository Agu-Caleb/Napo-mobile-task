/*
 * Jira Ticket:
 * Zeplin Design:
 * Feature Document:
 * Created Date: Sun, 4th Jun 2023, 16:02:46 pm
 * Author: Caleb Agu (caleb.agu@thedistance.co.uk)
 * Copyright (c) 2023 The Distance
 */

import React, {useState, useEffect, memo} from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/App.styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenHeader} from '../components/headers/Screen.header';
import {enGB} from '../utils/dictionary';
//import { useMagazineDataHook } from '../hooks/useDataHandler';
import Device from 'react-native-device-info';
//import { MagazineIssueCard } from '../components/cards/MagazineIssue.card';
import AppStyles from '../styles/App.styles';
import {colours} from '../styles/colours';

export const MoviesHomeScreen: React.FC = () => {
  //instantiate global states
  // const { MagazineData, setMonthsSwitch, monthsSwitch } = useMagazineDataHook();
  //`dimensions Hook
  const {height, width} = useWindowDimensions();
  // check if device is tablet
  const isTablet = Device.isTablet();
  //local states
  const [numberOfColumns, setNumberOfColumns] = useState(1);
  const navigation = useNavigation();
  // ** ** USEEFFECTS ** ** **
  //satisfying device constraints for [tablets, portrait, landscape]
  /* Since the useDimensions is a hook, it eans we will get updated values everytime there is a screen orientation change,
    I added those changes as a dependency in a useeffect hook so screen will adjust instanlty with the changes
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

  // ** ** FUNCTIONS ** ** **

  //Function to get swith boolean value and month toggled
  //   const toggleMonth = (value: boolean, month: string): void => {
  //     //Update global months state with new user switch action
  //     setMonthsSwitch({
  //       ...monthsSwitch,
  //       September: month === enGB.September ? value : monthsSwitch.September,
  //       August: month === enGB.August ? value : monthsSwitch.August,
  //       July: month === enGB.July ? value : monthsSwitch.July,
  //       June: month === enGB.June ? value : monthsSwitch.June,
  //     });
  //   };

  // Reset all filters when list is empty and reset button is touched
  //   const resetList = (): void => {
  //     //update global switch state value to reset list
  //     setMonthsSwitch({
  //       September: true,
  //       August: true,
  //       July: true,
  //       June: true,
  //     });
  //   };

  // ** ** RENDER ** ** **
  //View to reset list when all switch filters are off
  //   const renderEmpty = memo(() => {
  //     return (
  //       <Button
  //         onPress={resetList}
  //         title={enGB.ReloadButton}
  //         color={colours.darkBlue}
  //         testID="resetButton"
  //       />
  //     );
  //   });
  //** Render component to present switch filters before data*/
  //   const listHeader = memo(() => {
  //     /* Coonsidered extracting this to a standalone component but it's unlikely that if there were any other screens in this app,
  //           they would display this part of the home screen view, since this belongs only to this screen, it logical to view  on the screen.
  //           also memoised the render since the switch components are static  */

  //     /* A little idea about the switches in the flatlist header */
  //     /* The tasks asked for four switches which i did, for this task it's the best approach since the data is known and there are four unique issue months in the static data given.  If the data was dynamic and unknown without the number of switches specified,
  //      * my apporach would have been to map all unique issue months to create corresponding switches for the filters */

  //     return (
  //       <View style={styles.magazineHeaderViewContainer}>
  //         <View>
  //           <Text style={styles.filterTitleText} testID="filtersTile">
  //             {enGB.FilterTitleText}
  //           </Text>
  //         </View>
  //         <View style={styles.magazineHeaderSwitchSectionContainer}>
  //           <View style={styles.magazineHeaderItemsContainer}>
  //             <Text style={styles.monthsSwitchText} testID="septemberSwitchText">
  //               {enGB.September}
  //             </Text>
  //             <Switch
  //               testID="septemberSwitch"
  //               onValueChange={(switchValue): void =>
  //                 toggleMonth(switchValue, enGB.September)
  //               }
  //               value={monthsSwitch?.September}
  //             />
  //           </View>

  //           <View style={styles.magazineHeaderItemsContainer}>
  //             <Text style={styles.monthsSwitchText} testID="augustSwitchText">
  //               {enGB.August}
  //             </Text>
  //             <Switch
  //               testID="augustSwitch"
  //               onValueChange={(switchValue): void =>
  //                 toggleMonth(switchValue, enGB.August)
  //               }
  //               value={monthsSwitch?.August}
  //             />
  //           </View>
  //         </View>

  //         <View style={styles.magazineHeaderSwitchSectionContainer}>
  //           <View style={styles.magazineHeaderItemsContainer}>
  //             <Text style={styles.monthsSwitchText} testID="julySwitchText">
  //               {enGB.July}
  //             </Text>
  //             <Switch
  //               testID="julySwitch"
  //               onValueChange={(switchValue): void =>
  //                 toggleMonth(switchValue, enGB.July)
  //               }
  //               value={monthsSwitch?.July}
  //             />
  //           </View>

  //           <View style={styles.magazineHeaderItemsContainer}>
  //             <Text style={styles.monthsSwitchText} testID="juneSwitchText">
  //               {enGB.June}
  //             </Text>
  //             <Switch
  //               testID="juneSwitch"
  //               onValueChange={(switchValue): void =>
  //                 toggleMonth(switchValue, enGB.June)
  //               }
  //               value={monthsSwitch?.June}
  //             />
  //           </View>
  //         </View>
  //       </View>
  //     );
  //   });

  //   // Footer text is static so the render component is memoised to avoid rerendering
  //   const listFooter = memo((): any => {
  //     return (
  //       //** Screen footer constraint added, only visible when there is magazine data in screen  */
  //       MagazineData?.length > 0 && (
  //         <View style={AppStyles.magazineFooterTextContainer}>
  //           <Text style={styles.footerText} testID="footerText">
  //             {enGB.FooterText}
  //           </Text>
  //         </View>
  //       )
  //     );
  //   });

  //   //** Render component to present magazine issues*/
  //   const MagazineListItem = ({item}: {item: any}): any => {
  //     /**   extracted  magazine issue component because it a larger app with navigation,
  //      * the magazine issue will probably be shown in other screens based on screen context */
  //     return (
  //       <MagazineIssueCard
  //         magazineItems={item}
  //         numberOfColumns={numberOfColumns}
  //       />
  //     );
  //   };

  return (
    <>
      <ScreenHeader title={enGB.AppTitle} />
      <View style={styles.mainScreenContainer} testID="mainScreenContainer">
        <Text>Hello, React Native Screen two!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')}>
          <View>
            <Text>Hello</Text>
          </View>
        </TouchableOpacity>
        {/* <FlatList
          testID="magazineFlatlist"
          data={MagazineData}
          key={numberOfColumns}
          keyExtractor={(item, index): string => `${index}-${item}`}
          renderItem={MagazineListItem}
          showsVerticalScrollIndicator={false}
          numColumns={numberOfColumns}
          style={styles.listContainer}
          ListHeaderComponent={listHeader}
          ListFooterComponent={listFooter}
          ListEmptyComponent={renderEmpty}
        /> */}
      </View>
    </>
  );
};
