import { StyleSheet } from 'react-native'

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
    display: 'flex',
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
  }
})