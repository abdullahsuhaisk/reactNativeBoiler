import React, { useState } from 'react'
import {
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import { COLORS, SIZES, FONTS, icons, images } from "../constants"


interface Props {

}

const SelectLegueScreen: React.FC<Props> = (props) => {
    return (
        <View style={{ flex:1, backgroundColor: COLORS.white }}>
            <Text>
            SelectLegueScreen
            </Text>
        </View>
    );
}

export default SelectLegueScreen;