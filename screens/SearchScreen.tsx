import { FlatList, SafeAreaView, Dimensions, View, Text } from 'react-native'
import React, { useState, useEffect} from 'react'
// import { Input } from '@rneui/themed';
import ListCard from '../components/ListCard';
import { Input } from '@rneui/themed'

const SearchScreen = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const setOrientation = () => {
    if (windowWidth > windowHeight) {
      return 'landscape'
    } else {
      return 'portrait'
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

  return (
    <SafeAreaView style={{marginTop: 40}}>
      {/* foreach pokemon in pokemon */}
      {/* { setOrientation() === 'portrait' ? ( */}
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
          renderItem={({ item }) => <ListCard item={item}/>}
          /> 
        </View>
      {/* //   ) : (
      //   <SafeAreaView>
      //     <View style={tw(`w-1/2`)}>
      //     <Input 
      //       placeholder='Search ...' 
      //       value={search} 
      //       onChangeText={setSearch}
      //       containerStyle={tw("w-3/4 mx-auto")}
      //       style={tw("text-sm")}
      //       />

      //       <FlatList contentContainerStyle={tw("pb-96")}
      //         data={pokemon?.filter((item) => item.name.includes(search.toLowerCase()))}
      //         renderItem={({ item }) => <ListCard item={item}/>}
      //         />
      //     </View>
      //     <View style={tw(`w-1/2 justify-center items-center`)}>
      //       <Text>Test</Text>
      //     </View>
      //   </SafeAreaView>
      //   )
      // } */}
    </SafeAreaView>
  )
}

export default SearchScreen