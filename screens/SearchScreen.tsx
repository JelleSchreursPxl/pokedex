import { FlatList, SafeAreaView } from 'react-native'
import React, { useState, useEffect} from 'react'
// import { Input } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import ListCard from '../components/ListCard';
import { Input } from '@rneui/themed'

const SearchScreen = () => {
  const tw = useTailwind();

  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151')
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response.results)
    }
  }, [])

  return (
    <SafeAreaView style={tw("mt-10")}>
          <Input 
            placeholder='Search ...' 
            value={search} 
            onChangeText={setSearch}
            containerStyle={tw("w-3/4 mx-auto")}
            style={tw("text-sm")}
            />

      {/* foreach pokemon in pokemon */}
      <FlatList
        data={pokemon?.filter((item) => item.name.includes(search.toLowerCase()))}
        renderItem={({ item }) => <ListCard item={item}/>}
        />

    </SafeAreaView>
  )
}

export default SearchScreen