import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native'
import React , {useState, useEffect} from 'react'
import { Icon } from '@rneui/themed'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { 
  RouteProp, 
  useRoute, 
  CompositeNavigationProp, 
  useNavigation 
} from '@react-navigation/native';

// navigation props
import { RootStackParamList } from '../navigation/RootNavigator';
import { TabParamList } from '../navigation/TabNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${id}`)
    xhr.send()
    xhr.onload = () => {
      const response = JSON.parse(xhr.response)
      setPokemon(response)
    }
  }, [id])

  return (
    <ScrollView>
      <TouchableOpacity onPress={navigation.goBack} style={{position: 'absolute', right: 20, top: 20, zIndex: 50}}>
        <Icon name="closecircleo" type="antdesign" size={24} color="black" />
      </TouchableOpacity>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}} style={{ height: 320, width: 320 }} resizeMode={'contain'} />
      <View style={{display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems:'center'}}>
        <Text style={{fontSize: 24, fontWeight: "500" }}>#{pokemondetail?.id} - </Text>
        <Text style={{fontSize: 24, fontWeight: "500", marginRight: 24}}>{pokemondetail?.name}</Text>
        { isFavorite ? (
          <TouchableOpacity onPress={toggleFavorite}>
            <Icon name="heart" type="antdesign" size={32} color="red" />
          </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={toggleFavorite}>
              <Icon name="hearto" type="antdesign" size={32} color="red" />
            </TouchableOpacity>
          )
        }
        </View>
          <View style={{display: 'flex', flexDirection: 'column', padding: 8, marginTop: 24, width: '80%'}}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
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
                <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40}}>Stats</Text>
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
                <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40}}>Types</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '55%',  marginTop: 8}}>
                  {pokemondetail?.types.map((type, index) => (
                    <View key={index} style={{display: 'flex', flexDirection: 'row',  alignItems: 'flex-start'}}>
                      <Text style={{fontSize: 18, fontWeight: "500", paddingRight: 4}}>{type.type.name}</Text>
                    </View>
                  ))}
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '55%',  marginTop: 8}}>
              <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40}}>Abilities</Text>
              <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  marginTop: 8}}>
                {pokemondetail?.abilities.map((ability, index) => (
                  <View key={index} style={{display: 'flex', flexDirection: 'row',  alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 18, fontWeight: "500", paddingRight: 4}}>{ability.ability.name}</Text>
                    <Text style={{fontSize: 18, fontWeight: "500", paddingHorizontal: 4}}>{ability.is_hidden ? '(hidden)' : ''}</Text>
                  </View>
                ))}
              </View>
              <View style={{display: 'flex', flexDirection: 'column', marginTop: 8}}>
                <Text style={{fontSize: 18, fontWeight: "800", marginTop: 40}}>Moves</Text>
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

export default PokemonScreen
