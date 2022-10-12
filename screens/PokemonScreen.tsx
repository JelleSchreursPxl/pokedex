import { View, TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import React , {useState, useEffect} from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Icon } from '@rneui/themed'
import { 
  RouteProp, 
  useRoute, 
  CompositeNavigationProp, 
  useNavigation 
} from '@react-navigation/native';

// navigation props
import { RootStackParamList } from '../navigation/RootNavigator';
import { TabParamList } from '../navigation/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PortraitPokemonScreen from '../components/PortraitPokemonScreen';
import LandscapePokemonScreen from '../components/LandscapePokemonScreen';

type PokemonScreenNavigationProp = 
  CompositeNavigationProp<BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList, 'PokemonModal'>>;

type PokemonScreenRouteProp = RouteProp<RootStackParamList, 'PokemonModal'>;

const PokemonScreen = () => {
  const tw = useTailwind();

  const navigation = useNavigation<PokemonScreenNavigationProp>();
  const { params: { id } }  = useRoute<PokemonScreenRouteProp>();

  const [pokemondetail, setPokemon] = useState<PokemonDetail>();

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const setOrientation = () => {
    if (windowWidth > windowHeight) {
      return 'landscape'
    } else {
      return 'portrait'
    }
  }
  
  Dimensions.addEventListener('change', setOrientation);

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`)
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response)
    }
  }, [id])

  return (
    <View>
      <TouchableOpacity onPress={navigation.goBack} style={tw(`absolute right-5 top-5 z-50`)}>
        <Icon name="closecircleo" type="antdesign" size={24} color="black" />
      </TouchableOpacity>

      { setOrientation() === 'portrait' ? (
        <PortraitPokemonScreen pokemon={pokemondetail} />
      ) : (
        <LandscapePokemonScreen  />
      )}
      

    </View>
  )
}

export default PokemonScreen
