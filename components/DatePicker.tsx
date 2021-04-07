import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

interface DatePickerProps {

}

export const DatePicker: React.FC<DatePickerProps> = ({selected, setSelected, dates}) => {

  const renderItem = ({ item }) => {
    // console.log(item);
    const { day, date, id } = item
    return (
      <Date selected={selected} setSelected={setSelected} item ={item}/>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
      horizontal={true}
      renderItem={renderItem}
      data={dates}
      keyExtractor={item => item.id}
      scrollEnabled= {false}
      />
    </View>
  );
}

function Date({ selected, setSelected, item }) {
  const { day, date} = item
  return (
    <TouchableOpacity onPress= {() => setSelected(item)}>
      <View style={styles.dateCotainer}>
        <View style={styles.dayView}>
          <Text style={{ ...styles.dateText, fontWeight: '400' }}>
            {day}
          </Text>
        </View>
        {selected === item ? <View style={{ ...styles.dateView, ...styles.selectedDate }}>
          <Text style={{ ...styles.dateText, fontSize: SIZES.body4 }}>
            {date}
          </Text>
        </View> :
          <View style={styles.dateView}>
            <Text style={{ ...styles.dateText, fontSize: SIZES.body4 }}>
              {date}
            </Text>
          </View>
        }
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    height: 90,
    width: '100%'
  },
  dateCotainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    ...FONTS.body5,
    padding: 20
  },
  dayView: {
    paddingBottom: 7
  },
  dateText: {
    ...FONTS.body5,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  dateView: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedDate: {
    borderRadius: 100,
    backgroundColor: COLORS.lightPrimary,
  }
});