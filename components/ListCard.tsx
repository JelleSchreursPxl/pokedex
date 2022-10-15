import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from '@rneui/themed'
import { useTailwind } from 'tailwind-rn/dist'
import { useNavigation } from '@react-navigation/native';

const ListCard = ({ item , chosenPokemon } : Props) => {
  const tw = useTailwind();
  const navigation = useNavigation();

  const [pokemon, setPokemon] = useState<PokemonDetail>()

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const screenDisplayOrientation = () => {
    if (windowWidth > windowHeight) {
      return true
    } else {
      return false
    }
  }

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

  const screenRenders = () => {
    if (!screenDisplayOrientation()) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('PokemonModal', {
              id: pokemon?.id,
            })}>
              <Card containerStyle={{overflow: 'hidden', justifyContent: 'center', marginHorizontal: 16, height: 80}}>
                <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4, marginHorizontal: 8}}>
                    <Image source={{ uri: pokemon?.sprites.front_default }} style={{width: 80, height:80 }} resizeMode={'contain'}/>
                    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 16}}>
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>{ pokemon?.name }</Text>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        { pokemon?.types.map((type, index) => (
                          <Text key={index} 
                                style={{fontSize: 16, backgroundColor : typeColor(type.type.name), borderRadius: 20, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 }}>
                                  { type.type.name }
                          </Text>
                        ))}
                      </View>
                    </View>
                </View>
              </Card>
            </TouchableOpacity> 
        )}
        else {
          return (
            <TouchableOpacity onPress={() => chosenPokemon(item)}>
              <Card containerStyle={{overflow: 'hidden', justifyContent: 'center', marginHorizontal: 16, height: 80}}>
                <View style={{display: 'flex', flexDirection: 'row', marginVertical: 4, marginHorizontal: 8}}>
                    <Image source={{ uri: pokemon?.sprites.front_default }} style={{width: 80, height:80 }} resizeMode={'contain'}/>
                    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: 16}}>
                      <Text style={{fontWeight: 'bold', fontSize: 16}}>{ pokemon?.name }</Text>
                      <View style={{display: 'flex', flexDirection: 'row'}}>
                        { pokemon?.types.map((type, index) => (
                          <Text key={index} 
                                style={{fontSize: 16, backgroundColor : typeColor(type.type.name), borderRadius: 20, paddingHorizontal: 8, paddingVertical: 2, marginRight: 4 }}>
                                  { type.type.name }
                          </Text>
                        ))}
                      </View>
                    </View>
                </View>
              </Card>
            </TouchableOpacity> )
            }
          };

  return (
    <View>
      { pokemon ? screenRenders() : null }
    </View>
  )

}

export default ListCard