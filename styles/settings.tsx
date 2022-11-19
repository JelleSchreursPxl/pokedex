import { StyleSheet } from 'react-native'
import { shadow } from 'react-native-paper'

export const settings = StyleSheet.create({
  view:{
    height: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 16,
    width: '100%'
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 16
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24
  },
  switchText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16
  },
  logout: {
    flex: 1,
    marginTop: 400,
    alignContent: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white'
  },
  logoutButton: {
    width: '60%',
    backgroundColor: 'black',
    paddingVertical: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    display: 'flex',
    alignItems: 'flex-start',
    marginStart: 24,
    padding: 16
  },
  subcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#687572',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})