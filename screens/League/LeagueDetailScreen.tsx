import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableOpacityProps,
    StyleSheet
} from 'react-native'

import { COLORS, SIZES, FONTS, icons, images } from "../../constants"


interface Props {
    leagueName: String
    img: HTMLImageElement
}

const LeagueDetail: React.FC<Props> = (props) => {
    const { route, navigation } = props
    const {leagueName} = route.params
    console.log(route.params)
    return (
        <View>
            <Text>
            {leagueName}
            </Text>
        </View>
    );
}
// height: PixelRatio.getPixelSizeForLayoutSize(135),
const styles = StyleSheet.create({

});
export default LeagueDetail;