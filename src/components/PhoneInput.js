import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const PhoneInput = () => {
    const [phNumber, setPhNumber] = useState('');

    const formatPH = (number) => {
        let formatNum = number.replace(/\D/g, ''); // 숫자가 아닌 문자 제거
        if (formatNum.length > 3 && formatNum.length <= 7) {
            // 번호 중간에 '-' 추가
            formatNum = `${formatNum.slice(0, 3)}-${formatNum.slice(3)}`;
        } else if (formatNum.length > 7) {
            // 번호 중간과 끝에 '-' 추가
            formatNum = `${formatNum.slice(0, 3)}-${formatNum.slice(3, 7)}-${formatNum.slice(7, 11)}`;
        }
        return formatNum;
    }

    return (
        <View style={{ margin: 10 }}>
            <Text style={{
                marginBottom: 5,
                fontSize: 16,
                fontWeight: 'bold'
            }}>전화번호</Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    borderColor: '#999',
                    padding: 10,
                    borderRadius: 5
                }}
                value={phNumber}
                onChangeText={(text) => setPhNumber(formatPH(text))}
                keyboardType="phone-pad"
                placeholder="01012345678"
            />
        </View>
    )
}

export default PhoneInput