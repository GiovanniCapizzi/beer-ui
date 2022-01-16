import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonPage from './pages/ButtonPage';
import HomePage from './pages/HomePage';
import TypographyPage from './pages/TypographyPage';
import ImagesPage from './pages/ImagesPage';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BeerUI" component={HomePage} />
        <Stack.Screen name="Images" component={ImagesPage} />
        <Stack.Screen name="Buttons" component={ButtonPage} />
        <Stack.Screen name="Typography" component={TypographyPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

