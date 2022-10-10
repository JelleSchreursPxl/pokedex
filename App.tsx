import { TailwindProvider } from 'tailwind-rn/dist';
import { NavigationContainer } from '@react-navigation/native';
import utilities from './tailwind.json';
import RootNavigator from './navigation/RootNavigator';
// import { useTranslation, Trans } from 'react-i18next';

export default function App() {
  // const { t, i18n } = useTranslation();

  return (
    // @ts-ignore - TailwindProvider is not typed - missing type definition 
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}

