import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Card } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import { listcard } from '../styles/listcard';
import { useTheme } from 'react-native-rapi-ui';

const ListCard = ({ item , chosenPokemon } : Props) => {
  const navigation = useNavigation();

  const [pokemon, setPokemon] = useState<PokemonDetail>()

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const { isDarkmode } = useTheme();

  const screenDisplayOrientation = () => {
    if (windowWidth > windowHeight) {
      return true
    } else {
      return false
    }
  }

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
  

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', item.url)
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response)
    }
  }, [item])

  const screenRenders = () => {
    if (!screenDisplayOrientation()) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('PokemonModal', {
              id: pokemon?.id, style: { backgroundColor: isDarkmode ? 'black' : 'white', 
              color: isDarkmode ? 'white' : 'black' }
            })}>
              <Card containerStyle={[listcard.cardContainer, {backgroundColor: isDarkmode ? 'black' : 'white' }]}>
                <View style={listcard.view}>
                    <Image source={{ uri: pokemon?.sprites.front_default }} style={listcard.image} resizeMode={'contain'}/>
                    <View style={listcard.cardDisplay}>
                      <Text style={[listcard.text, {color: isDarkmode ? 'white' : 'black' }]}>{ pokemon?.name }</Text>
                      <View style={listcard.typesview}>
                        { pokemon?.types.map((type, index) => (
                          <Text key={index} 
                                style={[{ backgroundColor : typeColor(type.type.name)}, listcard.typeText, {color: isDarkmode ? 'white' : 'black' }]}>
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
              <Card containerStyle={[listcard.cardContainer, {backgroundColor: isDarkmode ? 'black' : 'white' }]}>
                <View style={listcard.view}>
                    <Image source={{ uri: pokemon?.sprites.front_default }} style={listcard.image} resizeMode={'contain'}/>
                    <View style={listcard.cardDisplay}>
                      <Text style={[listcard.text, {color: isDarkmode ? 'white' : 'black' }]}>{ pokemon?.name }</Text>
                      <View style={listcard.typesview}>
                        { pokemon?.types.map((type, index) => (
                          <Text key={index} 
                                style={[{ backgroundColor : typeColor(type.type.name)}, listcard.typeText, {color: isDarkmode ? 'white' : 'black' }]}>
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