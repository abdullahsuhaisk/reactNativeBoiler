import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants/theme'

const NavLink = ({ text, routeName }) => {
    const navigation = useNavigation();
    return (
    <>
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    link: {
      color: COLORS.secondary,
      margin: 15
    },
});

export default NavLink;