import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding_1 from './src/screens/Onboarding_1';
import Onboarding_2 from './src/screens/Onboarding_2';
import Onboarding_3 from './src/screens/Onboarding_3';
import { NavigationContainer } from '@react-navigation/native';
import Signup_1 from './src/screens/Signup_1';
import Signup_2 from './src/screens/Signup_2';
import Signup_3 from './src/screens/Signup_3';
import BackButton from './src/components/BackButton';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // const BottomTabScreen = () => {
  //   return (
  //       <Tab.Navigator>
  //         <Tab.Screen name="Onboarding_1" component={Onboarding_1} />
  //         <Tab.Screen name="Onboarding_2" component={Onboarding_2} />
  //         <Tab.Screen name="Onboarding_3" component={Onboarding_3} />
  //       </Tab.Navigator>
  //   );
  // }

  const OnboardingStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding_1" component={Onboarding_1} />
        <Stack.Screen name="Onboarding_2" component={Onboarding_2} />
        <Stack.Screen name="Onboarding_3" component={Onboarding_3} />
      </Stack.Navigator>
    );
  };

  const SignupStack = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="Signup_1"
          component={Signup_1}
          options={{ title: '회원가입', headerLeft: () => <BackButton onPress={() => navigation.navigate('Onboarding', { screen: 'Onboarding_1' })} /> }}
        />
        <Stack.Screen
          name="Signup_2"
          component={Signup_2}
          options={{ title: '회원가입', headerLeft: () => <BackButton onPress={() => navigation.navigate('Signup_1')} /> }}
        />
        <Stack.Screen
          name="Signup_3"
          component={Signup_3}
          options={{ title: '회원가입', headerLeft: () => <BackButton onPress={() => navigation.navigate('Signup_2')} /> }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={SignupStack} />
        <Stack.Screen name="Onboarding" component={OnboardingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;