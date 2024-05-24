import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ marginLeft: 10 }}>
            <Icon
                name='arrowleft'
                size={25}
                color="#000"
                style={{position: 'relative', right: 10}}
            />
        </TouchableOpacity>
    )
}

export default BackButton