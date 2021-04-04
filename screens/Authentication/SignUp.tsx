import React from 'react'
import { Text, View } from 'react-native';

interface SignUpProps {

}

export const SignUp: React.FC<SignUpProps> = ({ }) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Sıgn Up Component
      </Text>
    </View>
  );
}