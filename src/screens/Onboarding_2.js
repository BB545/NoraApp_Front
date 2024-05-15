import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Onboarding_2 = ({navigation}) => {
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
          }}>우리 함께 일상을 공유해요!</Text>
        </View>
        <View>
          <Text style={{
            color: '#000000',
            paddingLeft: 20,
            paddingRight: 20,
            fontSize: 19
          }}>산책, 반려동물, 건강 정보 등 좋아하는 것에 대해 함께 이야기하고, 정보를 공유해요</Text>
        </View>
        <View style={{
          alignItems: 'center',
          marginTop: 20,
          // width: '100%'
          // position: 'absolute'
        }}>
            <Image source={require('../../assets/img/Onboarding2.png')}
            style={{
              width: '100%',
              height: '80%',
              resizeMode: 'contain',
              // objectFit: 'fill'
            }} />
          <TouchableOpacity style={{
            backgroundColor: 'orange',
            width: 250,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            bottom: 180,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Onboarding_3')}>
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

export default Onboarding_2