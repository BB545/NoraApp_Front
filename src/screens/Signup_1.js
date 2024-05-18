import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import PhoneInput from '../components/PhoneInput'
import UseAgree from '../components/UseAgree'

const Signup_1 = () => {
    return (
        <SafeAreaView style={{
            backgroundColor: '#ffffff',
            flex: 1
        }}>
            <View style={{
                flex: 1,
                padding: 10
            }}>
                {/* <Header title='회원가입' /> */}
                <Text>전화번호로 회원가입</Text>
                <Text>전화번호는 아이디로 사용됩니다.</Text>
                <PhoneInput />
                <UseAgree />
            </View>
        </SafeAreaView>
    )
}

export default Signup_1