import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Comparison } from '.'

interface ComparisonsProps {
data: any
navigation: any
}

export const Comparisons: React.FC<ComparisonsProps> = ({ data, navigation }) => {

  function renderItem({ item }: {item: any}) {
    const { awayTeam, homeTeam, hour } = item
    return (
      <View style={{ flex: 1 }}>
        <Comparison
          awayTeam={awayTeam}
          homeTeam={homeTeam}
          hour={hour}
          navigation={navigation}
        />
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled
      />
    </View>);
}