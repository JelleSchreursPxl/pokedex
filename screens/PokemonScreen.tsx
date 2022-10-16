import { View, TouchableOpacity, Text, Image, ScrollView, Dimensions} from 'react-native'
import React , {useState, useEffect, useCallback} from 'react'
import { Icon } from '@rneui/themed'
import { useTheme } from 'react-native-rapi-ui';
import { 
  RouteProp, 
  useRoute, 
  CompositeNavigationProp, 
  useNavigation, 
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// navigation props
import { RootStackParamList } from '../navigation/RootNavigator';
import { TabParamList } from '../navigation/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { pokemonscreen } from '../styles/pokemonscreen';
import Strings from '../constants/Strings';

type PokemonScreenNavigationProp = 
  CompositeNavigationProp<BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList, 'PokemonModal'>>;

type PokemonScreenRouteProp = RouteProp<RootStackParamList, 'PokemonModal'>;

const PokemonScreen = () => {
  const navigation = useNavigation<PokemonScreenNavigationProp>();
  const { params: { id } }  = useRoute<PokemonScreenRouteProp>();

  const [pokemondetail, setPokemon] = useState<PokemonInfo>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => {
    setIsFavorite(previousState => !previousState);
  }

  const saveFavorite = async (id: number) => {
    try {
      await AsyncStorage.setItem(String(id), JSON.stringify(pokemondetail));
      toggleFavorite();
    } catch (error) {
      console.log(error);
    }
  }

  const removeFavorite = async (id: number) => {
    try {
      await AsyncStorage.removeItem(String(id));
      toggleFavorite();
    } catch (error) {
      console.log(error);
    }
  }

  const getFavorite = async (id: number) => {
    try {
      const value = await AsyncStorage.getItem(String(id));
      if (value !== null) {
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { isDarkmode } = useTheme();

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`)
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response)
    }
  }, [id])

  useEffect(() => {
    getFavorite(id);
  }, [id])

  return (
    <ScrollView style={{backgroundColor: isDarkmode ? 'black' : 'white', paddingTop: 16}}>
      <View style={pokemonscreen.topInfo}>
        <View style={pokemonscreen.touhables}>
          <View style={pokemonscreen.favorite}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={pokemonscreen.return}>
                <Icon name="left" type="antdesign" size={24} color={isDarkmode ? 'white' : 'black'}/>
                <Text>{Strings.pokemonScreen.pokedex}</Text>
              </View>
            </TouchableOpacity>
            <Text style={[pokemonscreen.pokemonName,{ marginRight: 24}, {color: isDarkmode ? 'white' : 'black'}]}>{pokemondetail?.name}</Text>
          </View>
            <View style={pokemonscreen.favorite}>
              <TouchableOpacity onPress={() => isFavorite ? removeFavorite(id) : saveFavorite(id)}>
                <Icon name={isFavorite ? 'heart' : 'hearto'} type="antdesign" size={24} color={isDarkmode ? 'red' : 'red'}/>
              </TouchableOpacity>
              <Text style={[pokemonscreen.number, {color: isDarkmode ? 'white' : 'black'}]}>#{pokemondetail?.id} </Text>
            </View>
        </View>
        <View style={pokemonscreen.imageBig}>
          <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}} 
                  style={pokemonscreen.image} resizeMode={'contain'} />
        </View>
      </View>
      <View style={pokemonscreen.container}>
      <View style={pokemonscreen.nameContainer}>
        </View>
          <View style={pokemonscreen.pokemonInfoContainer}>
              <View style={pokemonscreen.centerRowDisplay}>
                <View style={pokemonscreen.flexRow}>
                  <Text style={[pokemonscreen.pokemonInfo, {color: isDarkmode ? 'white' : 'black'}]}>{Strings.pokemonScreen.pokemon.height}</Text>
                  <Text style={[pokemonscreen.pokemonInfo, {color: isDarkmode ? 'white' : 'black'}]}>{pokemondetail?.height}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={[pokemonscreen.pokemonInfo, {color: isDarkmode ? 'white' : 'black'}]}>{Strings.pokemonScreen.pokemon.weight}</Text>
                  <Text style={[pokemonscreen.pokemonInfo, {color: isDarkmode ? 'white' : 'black'}]}>{pokemondetail?.weight}</Text>
                </View>
              </View>
              <View>
                <Text style={[pokemonscreen.pokemonInfoTitle, {color: isDarkmode ? 'white' : 'black'}]}>{Strings.pokemonScreen.title.stats}</Text>
                <View style={pokemonscreen.flexColumn}>
                  {pokemondetail?.stats.map((stat, index) => (
                    <View key={index} style={pokemonscreen.statsInfo}>
                      <Text style={[pokemonscreen.pokemonInfo, {paddingRight: 4}, {color: isDarkmode ? 'white' : 'black'}]}>{stat.stat.name}</Text>
                      <Text style={[pokemonscreen.pokemonInfo, { paddingHorizontal: 4}, {color: isDarkmode ? 'white' : 'black'}]}>{stat.base_stat}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View>
                <Text style={[pokemonscreen.pokemonInfoTitle, {color: isDarkmode ? 'white' : 'black'}]}>{Strings.pokemonScreen.title.types}</Text>
                <View style={pokemonscreen.pokemonDetailContainer}>
                  {pokemondetail?.types.map((type, index) => (
                    <View key={index} style={pokemonscreen.statsInfo}>
                      <Text style={[pokemonscreen.pokemonInfo, { paddingHorizontal: 4}, {color: isDarkmode ? 'white' : 'black'}]}>{type.type.name}</Text>
                    </View>
                  ))}
                </View>
            </View>
            <View style={pokemonscreen.abilitiesContainer}>
              <Text style={[pokemonscreen.pokemonInfoTitle,{color: isDarkmode ? 'white' : 'black'}]}>{Strings.pokemonScreen.title.abilities}</Text>
              <View style={pokemonscreen.abilities}>
                {pokemondetail?.abilities.map((ability, index) => (
                  <View key={index} style={pokemonscreen.abilitiesInfo}>
                    <Text style={[pokemonscreen.pokemonInfo, {paddingRight: 4}, {color: isDarkmode ? 'white' : 'black'}]}>{ability.ability.name}</Text>
                    <Text style={[pokemonscreen.pokemonInfo, { paddingHorizontal: 4}]}>{ability.is_hidden ? '(hidden)' : ''}</Text>
                  </View>
                ))}
              </View>
              <View style={pokemonscreen.movesContainer}>
                <Text style={[pokemonscreen.pokemonInfoTitle,{color: isDarkmode ? 'white' : 'black'}]}>{Strings.pokemonScreen.title.moves}</Text>
                <View style={pokemonscreen.moves}>
                  {pokemondetail?.moves.map((move, index) => (
                    <View key={index} style={pokemonscreen.movesInfo}>
                      <Text style={[pokemonscreen.pokemonInfo, {paddingRight: 4}, {color: isDarkmode ? 'white' : 'black'}]}>{move.move.name}</Text>
                    </View>
                  ))}
                </View>
              </View> 
          </View>
        </View>
      </View>
  </ScrollView>
  )
}

export default PokemonScreen
