import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation } from '@react-navigation/native';

const ListCard = ({ item } : Props ) => {
  const tw = useTailwind();
  const navigation = useNavigation();

  const [pokemon, setPokemon] = useState<PokemonDetail>()

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', item.url)
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response)
    }
  }, [item])

  const typeColor = (type: string) => {
    switch (type) {
      case 'bug':
        return '#A8B820';
      case 'dark':
        return '#705848';
      case 'dragon':
        return '#7038F8';
      case 'electric':
        return '#F8D030';
      case 'fairy':
        return '#FDB9E9';
      case 'fighting':
        return '#C03028';
      case 'fire':
        return '#FD7D25';
      case 'flying':
        return '#A890F0';
      case 'ghost':
        return '#7B62A3';
      case 'grass':
        return '#95C24D';
      case 'ground':
        return '#E0C068';
      case 'ice':
        return '#98D8D8';
      case 'normal':
        return '#A3ACAE';
      case 'psychic':
        return '#F366B9';
      case 'poison':
        return '#BA7EC8';
      case 'rock':
        return '#B8A038';
      case 'steel':
        return '#B8B8D0';
      case 'water':
        return '#4592C3';
      default:
        return '#A3ACAE';
    }
  }


  return (
    <TouchableOpacity onPress={() => navigation.navigate('PokemonModal', {
      id: pokemon?.id,
    })}>
      <Card containerStyle={tw("h-20 mx-4 my-1.5 justify-center overflow-hidden")}>
        <View style={tw(`flex-row my-1 mx-2 items-center`)}>
            <Image source={{ uri: pokemon?.sprites.front_default }} style={tw("w-20 h-20 ")} resizeMode={'contain'}/>
            <View style={tw(`flex-col content-center`)}>
              <Text style={tw(`text-base font-bold`)}>{ pokemon?.name }</Text>
              <View style={tw(`flex-row`)}>
                { pokemon?.types.map((type, index) => (
                  <Text key={index} 
                        style={[tw(`text-sm`), 
                        {backgroundColor : typeColor(type.type.name), borderRadius: 20, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 }]}>
                          { type.type.name }
                  </Text>
                ))}
              </View>
            </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default ListCard