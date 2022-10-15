import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { Icon } from '@rneui/base';
import React, {useState, useEffect}from 'react'


const LandScapePokemonView = ( { selection } : ListSelection )  => {

  const [pokemondetail, setPokemon] = useState<PokemonInfo>();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

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
    <ScrollView style={{width: '50%'}}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemondetail?.id}.png`}} style={{ height: 160, width: 160 }} resizeMode={'contain'} />
      <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems:'center'}}>
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
          <View style={{display: 'flex', flexDirection: 'column', marginTop: 24, width: '85%'}}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <View style={{display: 'flex', flexDirection: 'row', marginRight: 32}}>
                  <Text style={{fontSize: 18, fontWeight: "500"}}>Height: </Text>
                  <Text style={{fontSize: 18, fontWeight: "500"}}>{pokemondetail?.height}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 18, fontWeight: "500"}}>Weight: </Text>
                  <Text style={{fontSize: 18, fontWeight: "500"}}>{pokemondetail?.weight}</Text>
                </View>
              </View>
              <View>
                <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40, marginBottom: 16}}>Stats</Text>
                <View style={{display: 'flex', flexDirection: 'column' , alignItems:'flex-start', marginTop: 8}}>
                  {pokemondetail?.stats.map((stat, index) => (
                    <View key={index} style={{display: 'flex', flexDirection: 'row', paddingVertical: 4}}>
                      <Text style={{fontSize: 18, fontWeight: "500", paddingRight: 4}}>{stat.stat.name}</Text>
                      <Text style={{fontSize: 18, fontWeight: "500", paddingHorizontal: 4}}>{stat.base_stat}</Text>
                    </View>
                  ))}
                </View>
              </View>
              <View>
                <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40, marginBottom: 16}}>Types</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
                  {pokemondetail?.types.map((type, index) => (
                    <View key={index} style={{display: 'flex', flexDirection: 'row',  alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 18, fontWeight: "500", paddingRight: 4}}>{type.type.name}</Text>
                    </View>
                  ))}
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 8}}>
              <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40, marginBottom: 16}}>Abilities</Text>
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 8}}>
                {pokemondetail?.abilities.map((ability, index) => (
                  <View key={index} style={{display: 'flex', flexDirection: 'row',  alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 18, fontWeight: "500" }}>{ability.ability.name}</Text>
                    <Text style={{fontSize: 18, fontWeight: "500", paddingHorizontal: 4}}>{ability.is_hidden ? '(hidden)' : ''}</Text>
                  </View>
                ))}
              </View>
              <View style={{display: 'flex', flexDirection: 'column', marginTop: 8}}>
                <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40, marginBottom: 16}}>Moves</Text>
                <View style={{display: 'flex', flexDirection: 'column'}}>
                  {pokemondetail?.moves.map((move, index) => (
                    <View key={index} style={{display: 'flex', flexDirection: 'row'}}>
                      <Text style={{fontSize: 18, fontWeight: "500", paddingRight: 4}}>{move.move.name}</Text>
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