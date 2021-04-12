import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import {
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'
import { Button, Box } from '../../components'

import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import { LeagueStackNavProps } from './LeagueStack'


interface SelectLegueScreen {
  // onChange: (id: number) => void;
  // /** alternative function type syntax that takes an event (VERY COMMON) */
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  navigation: StackNavigationProp<null>

}

const leaguesList = [
  {
    id: 0,
    leagueName: "Süper Lig",
    img: images.superLeague
  },
  {
    id: 1,
    leagueName: "Premier Lig",
    img: images.premierLegue
  },
  {
    id: 2,
    leagueName: "Alman Ligi",
    img: images.frLeague
  },
  {
    id: 3,
    leagueName: "İspanya Ligi",
    img: images.esLeague
  },
  {
    id: 4,
    leagueName: "Fransa Ligi",
    img: images.frLeague
  },
  {
    id: 5,
    leagueName: "Premier Lig",
    img: images.premierLegue
  },
  {
    id: 6,
    leagueName: "Alman Ligi",
    img: images.frLeague
  }
]

const SelectLegueScreen: LeagueStackNavProps<"SelectLegueScreen"> = ({ navigation }) => {

  function handleClick(leagueName: string, img: HTMLImageElement): void {
    navigation.navigate('LeagueDetailScreen', { leagueName: leagueName, img: img })
  }
  const renderItem = ({ item }: {item: { img: HTMLImageElement, leagueName: string}}) => {
    // console.log(item);
    const { img, leagueName } = item
    return (
      <Box img={img} leagueName={leagueName} onClick={() => { handleClick(leagueName, img) }} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding:12 }}>
      <View style={{ height: '100%' }}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.boxWrapper}>
            <FlatList
              numColumns={3} 
              data={leaguesList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxWrapper: {
    display: 'flex',
  },
  scrollView: {
    display: 'flex',
    height: 100
  },
});

export default SelectLegueScreen;