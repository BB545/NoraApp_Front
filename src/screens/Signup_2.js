import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icon, Image } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signup_2 = ({ navigation }) => {
    const [nickname, setNickname] = useState('');
    const [isNicknameValid, setIsNicknameValid] = useState(null);

    const validateNickname = (text) => {
        setNickname(text);
        if (text === '노라') {
            setIsNicknameValid(false);
        } else if (text.length > 1 && text.length <= 10) {
            setIsNicknameValid(true);
        } else {
            setIsNicknameValid(null);
        }
    };

    return (
        <SafeAreaView style={{
            backgroundColor: '#fff',
            flex: 1
        }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.title}>만나서 반가워요 🙌</Text>
                    <Text style={styles.subtitle}>어떻게 불러드리면 될까요?</Text>
                    <Text style={styles.subContent}>(한글, 영어, 숫자만 사용할 수 있어요.)</Text>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.imageContainer}>
                            <Image
                                source={{ uri: 'https://via.placeholder.com/100' }}
                                style={styles.image}
                            />
                            <Text style={styles.changeText}>변경</Text>
                        </TouchableOpacity>
                        <View style={[
                            styles.inputContainer,
                            isNicknameValid === false ? styles.inputContainerInvalid : isNicknameValid === true ? styles.inputContainerValid : null,
                        ]}>
                            <TextInput
                                style={styles.input}
                                placeholder="별명"
                                value={nickname}
                                onChangeText={validateNickname}
                                maxLength={10}
                            />
                            <Text style={styles.charCount}>{nickname.length}/10</Text>
                        </View>
                        {isNicknameValid === false && (
                            <Text style={styles.errorMessage}>
                                <Icon name="error" color="red" size={16} />
                                누군가 이 이름을 사용하고 있어요! 다른 이름을 입력해 주세요.
                            </Text>
                        )}
                        {isNicknameValid === true && (
                            <Text style={styles.successMessage}>
                                <Icon name="check-circle" color="green" size={16} />
                                정말 좋은 이름이에요!
                            </Text>
                        )}
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={[styles.button, isNicknameValid === true ? styles.buttonEnabled : styles.buttonDisabled]}
                    disabled={isNicknameValid !== true}
                    onPress={() => navigation.navigate('Signup_3', { nickname: nickname })}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>다음으로</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        position: 'relative',
        top: 60
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20,
        position: 'relative',
        top: 60
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20,
        position: 'relative',
        top: 60
    },
    subContent: {
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 20,
        position: 'relative',
        top: 60
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    changeText: {
        marginTop: 10,
        color: '#007bff',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    inputContainerInvalid: {
        borderColor: 'red',
    },
    inputContainerValid: {
        borderColor: 'green',
    },
    input: {
        flex: 1,
    },
    charCount: {
        marginLeft: 10,
    },
    errorMessage: {
        color: 'red',
        marginBottom: 10,
    },
    successMessage: {
        color: 'green',
        marginBottom: 10,
    },
    button: {
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '95%',
        position: 'absolute',
        bottom: 40,
        left: 10
    },
    buttonEnabled: {
        backgroundColor: 'orange',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Signup_2