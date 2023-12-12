import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, useColorScheme, View , StatusBar, Appearance} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen.js'
import { Provider, useDispatch } from 'react-redux';
import store from './src/Store/Store.js'
import WordScreen from './src/Screens/WordScreen.js';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { setThemeColor } from './src/Store/Slices/themeColorSlice.js';
import style from './src/Store/StyleSheet.js';

export default function App() {

  const Stack = createNativeStackNavigator();
  const themeColor = Appearance.getColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar  
        barStyle={themeColor === 'light' ? 'dark-content' : 'light-content'} 
        backgroundColor = {themeColor === 'light' ? 'white' : '#121212'}/>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
            />
            <Stack.Screen
              name="WordScreen"
              component={WordScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
