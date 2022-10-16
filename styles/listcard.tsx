import { StyleSheet } from 'react-native'

export const listcard = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    marginHorizontal: 16,
    height: 80,
    borderRadius: 16,
    borderColor: 'transparent',
    borderWidth: 0,
  },
  image: {
    width: 80,
    height:80
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 4,
    marginHorizontal: 8
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  },
  typesview: {
    display: 'flex',
    flexDirection: 'row'
  },
  typeText: {
    fontSize: 16,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 4
  },
  cardDisplay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 48
  }

});