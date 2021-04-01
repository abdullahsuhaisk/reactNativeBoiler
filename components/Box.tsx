import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { COLORS, SIZES, FONTS, icons, images } from "../constants"


interface Props {
    onClick: () => void
    leagueName: String
    img: HTMLImageElement
}

const Box: React.FC<Props> = (props) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={props.onClick} style={styles.touchable}>
            <Image source={props.img} style={styles.imageStyle} />
                <View style={styles.content}>
                    <Text style={{ ...FONTS.body4, fontWeight: 'bold', color: COLORS.primary }}>
                        {props.leagueName}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
// height: PixelRatio.getPixelSizeForLayoutSize(135),
const styles = StyleSheet.create({
    wrapper: {
        width: (SIZES.width/3)-20,
        height: 140,
        borderColor: COLORS.black,
        borderRadius: 5,
        borderWidth: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: COLORS.white
    },
    imageStyle: {
        width: '75%',
        maxHeight: '75%',
        resizeMode: 'stretch'
    },
    touchable: {
        width:'100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default Box;