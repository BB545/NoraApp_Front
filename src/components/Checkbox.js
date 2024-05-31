import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Checkbox = ({ label, checked, onPress }) => {
    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
            <Icon
                name={checked ? 'checkcircle' : 'checkcircleo'}
                size={20}
                color={checked ? 'orange' : '#ccc'}
            />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    label: {
        marginLeft: 8,
        fontSize: 18,
        textDecorationLine: 'underline'
    },
});

export default Checkbox