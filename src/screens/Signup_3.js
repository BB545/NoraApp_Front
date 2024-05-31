import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signup_3 = ({ navigation, route }) => {
    const { nickname } = route.params;

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            width: '100%'
        }}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                marginBottom: 10,
                color: 'black',
                marginTop: 50,
                paddingLeft: 20
            }}>황금청춘에 오신 것을 환영해요!</Text>
            <Text style={{
                fontSize: 20,
                marginBottom: 30,
                fontWeight: 'bold',
                paddingLeft: 20
            }}>{nickname}님의 청춘을 응원합니다:)</Text>
            <View style={{
                flex: 1,
                alignItems: 'center',
                paddingLeft: 20,
                paddingRight: 20
            }}>
                <Image
                    source={require('../../assets/img/Signup_3.png')}
                    style={{
                        width: 250,
                        height: 350,
                        marginBottom: 60,
                    }}
                />
                <TouchableOpacity style={{
                    padding: 15,
                    borderRadius: 5,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                    width: '100%',
                }} onPress={() => console.log('황금청춘 이용하러 가기')}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>황금청춘 이용하러 가기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Signup_3