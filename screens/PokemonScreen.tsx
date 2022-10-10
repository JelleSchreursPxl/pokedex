import { View, TouchableOpacity, Text, Image } from 'react-native'
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
import FavoriteScreen from './FavoritesScreen';

// banner image

type PokemonScreenNavigationProp = 
  CompositeNavigationProp<BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList, 'PokemonModal'>>;

type PokemonScreenRouteProp = RouteProp<RootStackParamList, 'PokemonModal'>;

const PokemonScreen = () => {
  const tw = useTailwind();

  const navigation = useNavigation<PokemonScreenNavigationProp>();
  const { params: { id} }  = useRoute<PokemonScreenRouteProp>();

  const [pokemondetail, setPokemon] = useState<PokemonDetail>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

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

      <View style={tw(`flex justify-center items-center`)}>
        <Image source={{uri: pokemondetail?.sprites.front_default}} style={{ height: 320, width: 320 }} resizeMode={'contain'} />
        <View style={[tw(`flex-row content-center items-center`)]}>
          <Text style={{fontSize: 24, fontWeight: "500" }}>#{pokemondetail?.id} - </Text>
          <Text style={{fontSize: 24, fontWeight: "500", marginRight: 24}}>{pokemondetail?.name}</Text>
          { isFavorite ? (
            <TouchableOpacity onPress={toggleFavorite}>
              <Icon name="heart" type="antdesign" size={20} color="red"/>
            </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleFavorite}>
                <Icon name="hearto" type="antdesign" size={20} color="red" />
              </TouchableOpacity>
            )
          }
        </View>
      </View>
    </View>
  )
}

export default PokemonScreen

function isFavorite(): boolean {
  return true;
}
