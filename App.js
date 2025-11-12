import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Aluno from './screens/Aluno';
import Admin from './screens/Admin';
import { UserProvider } from './context/UserContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Aluno" component={Aluno} />
          <Stack.Screen name="Admin" component={Admin} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
