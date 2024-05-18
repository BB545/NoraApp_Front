import { View, Text, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const RadioButton = ({ isSelected, onPress, text }) => (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        }}
        onPress={onPress}
    >
        <View style={{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
        }}>
            {isSelected ? (
                <View style={{
                    height: 12,
                    width: 12,
                    borderRadius: 6,
                    backgroundColor: '#000',
                }} />
            ) : null}
        </View>
        <Text>{text}</Text>
    </TouchableOpacity>
);

const UseAgree = () => {
    const [terms, setTerms] = useState({
        service: false,
        privacy: false,
        community: false,
        location: false,
    });

    const [overFifty, setOverFifty] = useState(null);

    const handleTermChange = (term) => {
        setTerms({ ...terms, [term]: !terms[term] });
    };

    return (
        <View style={{
            flex: 1,
            padding: 20,
        }}>
            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
            }}>이용 약관 동의</Text>
            {Object.keys(terms).map((key) => (
                <RadioButton
                    key={key}
                    isSelected={terms[key]}
                    onPress={() => handleTermChange(key)}
                    text={
                        key === 'service' ? '서비스 이용약관 동의 (필수)' :
                            key === 'privacy' ? '개인정보 수집 이용 동의 (필수)' :
                                key === 'community' ? '커뮤니티 가이드 동의 (필수)' :
                                    '위치기반 서비스 이용 동의 (선택)'
                    }
                />
            ))}

            <Text style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10,
                marginTop: 20,
            }}>연령대 선택</Text>
            <RadioButton
                isSelected={overFifty === true}
                onPress={() => setOverFifty(true)}
                text="만 50세 이상입니다."
            />
            <RadioButton
                isSelected={overFifty === false}
                onPress={() => setOverFifty(false)}
                text="만 50세 미만입니다."
            />
        </View>
    )
}

export default UseAgree