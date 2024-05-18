import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View>
        <TouchableOpacity style={{
            backgroundColor: 'orange',
            width: 250,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            bottom: 120,
            borderRadius: 10,
        }}
            onPress={() => navigation.navigate('Onboarding_2')}>
            <Text style={{
                color: '#ffffff',
                fontSize: 20,
                fontWeight: '600',
            }}>다음</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button