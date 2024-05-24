import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from '../components/Checkbox';
import Icon from 'react-native-vector-icons/AntDesign';

const Signup_1 = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState({
    all: false,
    terms: false,
    privacy: false,
    community: false,
    location: false,
  });
  const [showCheckboxes, setShowCheckboxes] = useState(true);
  const [age, setAge] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCheckBox = (key) => {
    if (key === 'all') {
      const newValue = !isChecked.all;
      setIsChecked({
        all: newValue,
        terms: newValue,
        privacy: newValue,
        community: newValue,
        location: newValue,
      });
      setShowCheckboxes(!showCheckboxes);
    } else {
      const newState = { ...isChecked, [key]: !isChecked[key] };
      newState.all = newState.terms && newState.privacy && newState.community && newState.location;
      setIsChecked(newState);
    }
  };

  const handleAgeSelection = (selectedAge) => {
    setAge(selectedAge);
    if (selectedAge === 'below') {
      setIsModalVisible(true);
    }
  };

  const allChecked = Object.values(isChecked).every(Boolean);
  const isButtonEnabled = allChecked && age === 'above';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>전화번호로 회원가입</Text>
        <Text style={styles.subtitle}>전화번호는 아이디로 사용됩니다.</Text>
        <TextInput
          style={styles.input}
          placeholder="전화번호"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            label="아래 사용 약관에 모두 동의합니다."
            checked={isChecked.all}
            onPress={() => handleCheckBox('all')}
          />

          {showCheckboxes && (
            <View style={styles.indentCheckboxContainer}>
              <Checkbox
                label="서비스 이용약관 동의(필수)"
                checked={isChecked.terms}
                onPress={() => handleCheckBox('terms')}
              />
              <Checkbox
                label="개인정보 수집 이용 동의(필수)"
                checked={isChecked.privacy}
                onPress={() => handleCheckBox('privacy')}
              />
              <Checkbox
                label="커뮤니티 가이드 동의(필수)"
                checked={isChecked.community}
                onPress={() => handleCheckBox('community')}
              />
              <Checkbox
                label="위치기반 서비스 이용 동의(선택)"
                checked={isChecked.location}
                onPress={() => handleCheckBox('location')}
              />
            </View>
          )}
        </View>
        <View style={styles.radioContainer}>
          <TouchableOpacity style={styles.radioOption} onPress={() => handleAgeSelection('above')}>
            <View style={styles.radioCircle}>
              {age === 'above' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>만 50세 이상입니다.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioOption} onPress={() => handleAgeSelection('below')}>
            <View style={styles.radioCircle}>
              {age === 'below' && <View style={styles.selectedRb} />}
            </View>
            <Text style={styles.radioText}>만 50세 미만입니다.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled]}
        disabled={!isButtonEnabled}
        onPress={() => navigation.navigate('Signup_2')}
      >
        <Text style={styles.buttonText}>다음으로</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} style={{ width: '100%', position: 'relative', left: -20, top: 20 }}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Icon
              name='close'
              size={25}
              color="#000"
              style={{ position: "relative", left: '48%' }}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>만 50세부터 노라 회원이 가능해요😢</Text>
          <Text style={styles.modalSubText}>황금청춘은 만 50세 이상을 위한 커뮤니티예요! 다음에 꼭 다시 찾아 주세요!</Text>
          <TouchableOpacity style={styles.modalButton} onPress={() => setIsModalVisible(false)}>
            <Text style={styles.modalButtonText}>다음에 다시 오기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    position: 'relative',
    top: 50,
    padding: 20
  },
  container: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    height: '100%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  indentCheckboxContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  radioContainer: {
    marginBottom: 20,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioText: {
    marginLeft: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'orange',
  },
  button: {
    width: '95%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
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
    fontSize: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%'
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20
  },
  modalSubText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  modalButton: {
    backgroundColor: '#f0ad4e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Signup_1;
