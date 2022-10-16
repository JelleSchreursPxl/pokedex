import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Icon } from '@rneui/base';
import React, {useState, useEffect}from 'react'
import { pokemonscreen } from '../styles/pokemonscreen';
import Strings from '../constants/Strings';
import { useTheme } from 'react-native-rapi-ui';

const LandScapePokemonView = ( { selection } : ListSelection )  => {
  const [pokemondetail, setPokemon] = useState<PokemonInfo>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  const { isDarkmode } = useTheme();

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `${selection}`)
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response)
    }
  }, [selection])

  return (
    <ScrollView style={[{backgroundColor: isDarkmode ? 'black' : 'white', paddingTop: 16}, pokemonscreen.landscape]}>
    <View style={pokemonscreen.topInfo}>
      <View style={pokemonscreen.landscapeTouhables}>
        <View style={pokemonscreen.favorite}>
          <Text style={[pokemonscreen.pokemonName,{ marginRight: 24}, {color: isDarkmode ? 'white' : 'black'}]}>{pokemondetail?.name}</Text>
        </View>
          <View style={pokemonscreen.favorite}>
            <TouchableOpacity onPress={() => toggleFavorite()}>
              <Icon name={isFavorite ? 'heart' : 'hearto'} type="antdesign" size={24} color={isDarkmode ? 'red' : 'red'}/>
            </TouchableOpacity>
            <Text style={[pokemonscreen.number, {color: isDarkmode ? 'white' : 'black'}]}>#{pokemondetail?.id} </Text>
          </View>
      </View>
      <View style={pokemonscreen.landscapeimageBig}>
        <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemondetail?.id}.png`}} 
                style={pokemonscreen.landscapeImage} resizeMode={'contain'} />
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



export default LandScapePokemonView