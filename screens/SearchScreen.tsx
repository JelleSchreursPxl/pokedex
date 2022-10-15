import { FlatList, SafeAreaView, Dimensions, View, Image, ScrollView } from 'react-native'
import React, { useState, useEffect} from 'react'
// import { Input } from '@rneui/themed';
import ListCard from '../components/ListCard';
import { Input } from '@rneui/themed'
import PokemonScreen from './PokemonScreen';
import LandScapePokemonView from '../components/LandScapePokemonView';

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

  const [poke, setPoke] = useState<Pokemon>()
  const chosenPokemon = (chosenPokemon: Pokemon) => {
    setPoke(chosenPokemon)
  }

  // console.log(poke);

  const screenRenders = () => {
    if(!setOrientation()) {
    return (
      <SafeAreaView style={{marginTop: 40}}>
          <View>
            <Input 
            placeholder='Search ...' 
            value={search} 
            onChangeText={setSearch}
            containerStyle={{ width: '75%', alignSelf: 'center'}}
            style={{fontSize: 14, lineHeight: 20}}
            />

          <FlatList contentContainerStyle={{paddingBottom: 80}}
            data={pokemon?.filter((item) => item.name.includes(search.toLowerCase()))}
            renderItem={({ item }) => <ListCard item={item} chosenPokemon={chosenPokemon}/>}
            /> 
          
          {
            poke == null ? null : <PokemonScreen />
          }
        </View>

    </SafeAreaView>
    ); 
    } else {
      return (
        <SafeAreaView style={{marginTop: 40}}>
          <View>
            <Input 
            placeholder='Search ...' 
            value={search} 
            onChangeText={setSearch}
            containerStyle={{ width: '75%', alignSelf: 'center'}}
            style={{fontSize: 14, lineHeight: 20}}
            />

            <View style={{flexDirection: 'row'}}>
              <FlatList contentContainerStyle={{paddingBottom: 80}}
                data={pokemon?.filter((item) => item.name.includes(search.toLowerCase()))}
                renderItem={({ item }) => <ListCard item={item} chosenPokemon={chosenPokemon}/>}
              /> 
                <LandScapePokemonView selection={poke?.url}/>
            </View>
          
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