import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Onboarding_1 = ({navigation}) => {
  return (
    <SafeAreaView style={{
      backgroundColor: '#ffffff'
    }}>
        <View>
          <Text style={{
            fontSize: 25,
            fontWeight: '900',
            color: '#000000',
            padding: 20,
            marginTop: 100,
          }}>당신을 기다렸어요</Text>
        </View>
        <View>
          <Text style={{
            color: '#000000',
            paddingLeft: 20,
            paddingRight: 20,
            fontSize: 19
          }}>노라와 함께라면 외롭지 않아요!</Text>
          <Text style={{
            color: '#000000',
            paddingLeft: 20,
            paddingRight: 20,
            fontSize: 19
          }}>자유롭게 회원님의 이야기를 들려주세요</Text>
        </View>
        {/* <View style={{
          height: 200
        }}></View> */}
        <View style={{
          alignItems: 'center',
          marginTop: 80,
        }}>
            <Image source={require('../../assets/img/Onboarding1.png')}
            style={{
              width: '100%',
              height: '75%',
              resizeMode: 'contain'
            }} />
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
    </SafeAreaView>
  )
}

export default Onboarding_1