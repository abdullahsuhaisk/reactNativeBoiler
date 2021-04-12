import React from 'react'
import { Text, View } from 'react-native'

interface ComparisonDetailProps {
  route: any
  navigation: any
}

export const ComparisonDetail: React.FC<ComparisonDetailProps> = ({route, navigation}) => {
  const { awayTeam, homeTeam } = route.params

    return (<View><Text>{homeTeam}</Text></View>);
}