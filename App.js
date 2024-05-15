import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding_1 from './src/screens/Onboarding_1';
import Onboarding_2 from './src/screens/Onboarding_2';
import Onboarding_3 from './src/screens/Onboarding_3';
import { NavigationContainer } from '@react-navigation/native';

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

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding_1" component={Onboarding_1} />
        <Stack.Screen name="Onboarding_2" component={Onboarding_2} />
        <Stack.Screen name="Onboarding_3" component={Onboarding_3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;