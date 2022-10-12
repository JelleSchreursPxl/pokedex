import { View, Text, Image, TouchableOpacity } from 'react-native'
import React , {useState }from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { Icon } from '@rneui/themed'


const PortraitPokemonScreen = ({ pokemon } : any) => {
  const tw = useTailwind();

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <View style={tw(`flex justify-center items-center`)}>
    <Image source={{uri: pokemon?.sprites.front_default}} style={{ height: 320, width: 320 }} resizeMode={'contain'} />
    <View style={[tw(`flex-row content-center items-center`)]}>
      <Text style={{fontSize: 24, fontWeight: "500" }}>#{pokemon?.id} - </Text>
      <Text style={{fontSize: 24, fontWeight: "500", marginRight: 24}}>{pokemon?.name}</Text>
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
  </View>
  )
}

export default PortraitPokemonScreen