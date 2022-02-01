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
import { ColorsProps, ThemeProvider } from 'beer-ui';
import PalettePage from './pages/PalettePage';
import { StoreProvider } from 'easy-peasy';
import { store, useStoreState } from './redux/store';
import MiscPage from './pages/MiscPage';

const Stack = createNativeStackNavigator();

const Router = () => {
  const customTheme: ColorsProps = useStoreState(
    (state) => state.ui.customTheme
  );
  return (
    <ThemeProvider colors={customTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BeerUI" component={HomePage} />
          <Stack.Screen name="Headers" component={HeaderPage} />
          <Stack.Screen name="Images" component={ImagesPage} />
          <Stack.Screen name="Buttons" component={ButtonPage} />
          <Stack.Screen name="Typography" component={TypographyPage} />
          <Stack.Screen name="Tags" component={TagsPage} />
          <Stack.Screen name="Carousel" component={CarouselPage} />
          <Stack.Screen name="Palette" component={PalettePage} />
          <Stack.Screen name="Misc" component={MiscPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

function App() {
  return (
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  );
}

export default App;
