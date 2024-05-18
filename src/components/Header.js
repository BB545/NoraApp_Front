import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Image source={require('../../assets/img/Onboarding3.png')}
            style={{
              width: '100%',
              height: '80%',
              resizeMode: 'contain',
            }} />
            <Text>{title}</Text>
            <Text></Text>
        </View>
    )
}

export default Header