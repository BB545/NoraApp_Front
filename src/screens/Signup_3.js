import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signup_3 = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', width: '100%' }}>
            <Text style={styles.title}>황금청춘에 오신 것을 환영해요!</Text>
            <Text style={styles.subtitle}>붉은노을님의 청춘을 응원합니다:)</Text>
            <View style={styles.container}>
                <Image
                    source={require('../../assets/img/Signup_3.png')}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.button} onPress={() => console.log('황금청춘 이용하러 가기')}>
                    <Text style={styles.buttonText}>황금청춘 이용하러 가기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        // padding: 20
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        marginTop: 50,
        paddingLeft: 20
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        paddingLeft: 20
    },
    image: {
        width: 250,
        height: 350,
        marginBottom: 60,
    },
    button: {
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'orange',
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Signup_3