import { StyleSheet} from 'react-native'

export const pokemonscreen = StyleSheet.create({
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  return:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touhables: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 24,
    height: 300,
    position: 'relative',
    zIndex: 1,
  },
  landscapeTouhables: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 24,
    height: 160,
    position: 'relative',
    zIndex: 1,
  },
  favorite: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageBig: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 72,
    left: 32,
    zIndex: 3
  },
  landscapeimageBig: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    top: 72,
    left: 64,
    zIndex: 3
  },
  pokemonName: {
    fontSize: 32,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 10,
  },
  number: {
    fontSize: 18,
    paddingTop: 10,
    fontWeight: '700',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginBottom: 10,
  },
  close: {
    position: 'absolute',
    right: 20, 
    top: 20,
    zIndex: 50
  },
  closeIcon: {
    width: 32,
    height: 32,
    color: 'black'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 80
  },
  image: {
    height: 320,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  landscapeImage: {
    height: 160,
    width: 160
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  pokemonGlobalInfo: {
    fontSize: 18,
    fontWeight: '700',
  },
  icon: {
    fontSize: 32,
  },
  pokemonInfo: {
    fontSize: 18,
    fontWeight: '500',
  },
  pokemonInfoTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 40
  },
  pokemonInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    width: '80%',
    marginTop: 24,
  },
  centerRowDisplay: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }, 
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 32,
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  pokemonDetailContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '55%',
    marginTop: 8,
  },
  statsInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 4,
  },
  typename: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  abilitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '55%',
    marginTop: 8,
  },
  abilities: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  abilitiesInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  movesContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
  },
  moves: {
    display: 'flex',
    flexDirection: 'column',
  },
  movesInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  landscape: {
    width: '50%',
  },
  evolutionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '55%',
    marginTop: 8,
  },
  evolutionImage: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  evolutionName: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
    textAlign: 'center',
  },

})