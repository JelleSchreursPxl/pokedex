import { FlatList, SafeAreaView, Dimensions, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect} from 'react'
// import { Input } from '@rneui/themed';
import ListCard from '../components/ListCard';
import { Input } from '@rneui/themed'
import PokemonScreen from './PokemonScreen';
import LandScapePokemonView from '../components/LandScapePokemonView';
import { searchscreen } from '../styles/searchscreen';
import Strings from '../constants/Strings';
import { useTheme } from 'react-native-rapi-ui';

const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const setOrientation = () => {
    if (windowWidth > windowHeight) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151')
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response.results)
    }
  }, [])

  const { isDarkmode } = useTheme();
  const [poke, setPoke] = useState<Pokemon>()
  const chosenPokemon = (chosenPokemon: Pokemon) => {
    setPoke(chosenPokemon)
  }

  const screenRenders = () => {
    if(!setOrientation()) {
    return (
      <SafeAreaView style={[searchscreen.container, {backgroundColor: isDarkmode ? 'black' : 'white'}]}>
            <Input 
            placeholder={Strings.searchScreen.search}
            value={search} 
            onChangeText={setSearch}
            containerStyle={searchscreen.searchContainer}
            style={[searchscreen.searchInput, {color: isDarkmode ? 'white' : 'black'}, { backgroundColor: isDarkmode ? 'black' : 'white'}]}
            />

          <FlatList contentContainerStyle={searchscreen.flatlist}
            data={pokemon?.filter((item) => item.name.includes(search.toLowerCase()))}
            renderItem={({ item }) => <ListCard item={item} chosenPokemon={chosenPokemon}/>}
            /> 
          
          {
            poke == null ? null : <PokemonScreen />
          }

    </SafeAreaView>
    ); 
    } else {
      return (
        <SafeAreaView style={[searchscreen.container, {backgroundColor: isDarkmode ? 'black' : 'white'}]}>
            <Input 
            placeholder={Strings.searchScreen.search}
            value={search} 
            onChangeText={setSearch}
            containerStyle={searchscreen.searchContainer}
            style={[searchscreen.searchInput, {color: isDarkmode ? 'white' : 'black'}, { backgroundColor: isDarkmode ? 'black' : 'white'}]}
            />

            <View style={{flexDirection: 'row'}}>
              <FlatList contentContainerStyle={searchscreen.flatlist}
                data={pokemon?.filter((item) => item.name.includes(search.toLowerCase()))}
                renderItem={({ item }) => <ListCard item={item} chosenPokemon={chosenPokemon}/>}
              /> 
              {
                <LandScapePokemonView selection={poke?.url}/>
              }
            </View>
        </SafeAreaView>
      );
    }
  };

  return (
    screenRenders()
  )
}


export default SearchScreen