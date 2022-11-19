import { StyleSheet } from 'react-native';

export const homescreen = StyleSheet.create({
  container: {
    flex: 1,
    paddingnHorizontal: 24,
    paddingVertical: 16,
  },
  screen: {
    flex: 1,
    margin: 16,
  },
  welcome: {
    fontSize: 48,
    fontWeight: '800',
    marginTop: 40,
    marginLeft: 16,
  },
  user: {
    fontSize: 32,
    fontWeight: '800',
    marginLeft: 16,
  },
  logo: {
    width: 96,
    height: 96,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 24,
  },
  info: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 32,
  },
  pokemonNews: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
});