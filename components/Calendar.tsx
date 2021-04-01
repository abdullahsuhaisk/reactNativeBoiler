import React, { useState } from 'react'
import {
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { COLORS, SIZES, FONTS, icons, images } from "../constants"


interface Props {
    title: string
    onClick: TouchableOpacityProps
}

const Calendar: React.FC<Props> = (props) => {
    return(
        <View style={{width:'100%'}}>
        <TouchableOpacity
            style={{
                height: 60,
                width: '100%',
                backgroundColor: COLORS.blue,
                borderRadius: SIZES.radius / 1.5,
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onPress={ props.onClick }>
            <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{props.title}</Text>
        </TouchableOpacity>
    </View>
    );
}

export default Calendar;