import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ButtonPage from './pages/ButtonPage';
import HomePage from './pages/HomePage';
import TypographyPage from './pages/TypographyPage';
import ImagesPage from './pages/ImagesPage';
import TagsPage from './pages/TagsPage';
import CarouselPage from './pages/CarouselPage';
import HeaderPage from './pages/HeaderPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BeerUI" component={HomePage} />
        <Stack.Screen name="Headers" component={HeaderPage} />
        <Stack.Screen name="Images" component={ImagesPage} />
        <Stack.Screen name="Buttons" component={ButtonPage} />
        <Stack.Screen name="Typography" component={TypographyPage} />
        <Stack.Screen name="Tags" component={TagsPage} />
        <Stack.Screen name="Carousel" component={CarouselPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
