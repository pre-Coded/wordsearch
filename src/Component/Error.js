import React from 'react'

import { View, Text } from 'react-native'

const Error = ({text}) => {
  return (
    <View style={{
        margin : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }}>
        <Text style={{color : 'red'}}>{text}</Text>
    </View>
  )
}

export default Error