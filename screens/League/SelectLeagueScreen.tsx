import React, { useState } from 'react'
import {
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native'
import { Button, Box } from '../../components'

import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import { LeagueStackNavProps } from './LeagueStack'


interface SelectLegueScreen {
    // onChange: (id: number) => void;
    // /** alternative function type syntax that takes an event (VERY COMMON) */
    // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

const SelectLegueScreen: LeagueStackNavProps<"LeagueScreen"> = ({navigation}) => {

    const leagueName: string = "Premier Lig";
    function handleClick(): void {
       navigation.navigate('LeagueDetailScreen', { leagueName:leagueName, title: leagueName })
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{height:'100%'}}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.boxWrapper}>
                        <Box img={images.premierLegue} leagueName={"Premier Lig"} onClick={() => {handleClick()}} />
                        <Box img={images.superLeague} leagueName={"Super Lig"} onClick={() => {handleClick()}} />
                        <Box img={images.italyLeague} leagueName={"Italya Lig"} onClick={() => {handleClick()}} />
                        <Box img={images.frLeague} leagueName={"Fransa Lig"} onClick={() => {handleClick()}} />
                        <Box img={images.esLeague} leagueName={"İspanya Lig"} onClick={() => {console.log("Premier Lig")}} />
                        <Box img={images.premierLegue} leagueName={"Premier Lig"} onClick={() => {console.log("Premier Lig")}} />
                        <Box img={images.superLeague} leagueName={"Super Lig"} onClick={() => {console.log("Premier Lig")}} />
                        <Box img={images.italyLeague} leagueName={"Italya Lig"} onClick={() => {console.log("Premier Lig")}} />
                        <Box img={images.frLeague} leagueName={"Fransa Lig"} onClick={() => {console.log("Premier Lig")}} />
                        <Box img={images.esLeague} leagueName={"İspanya Lig"} onClick={() => {console.log("Premier Lig")}} />
                </View>
            </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    boxWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    scrollView: {
        display: 'flex',
        height: 100
    },
});

export default SelectLegueScreen;