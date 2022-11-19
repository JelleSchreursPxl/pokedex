import { StyleSheet } from 'react-native';

export const loginscreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 64,
  },
  inputContainer: {
    width: '70%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
    height: 50,
    borderBottomColor: '#000 !important',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 56,
  },
  button: {
    backgroundColor: '#687572',
    width: '100%',
    padding: 16,
    borderRadius: 48,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 8,
    borderColor: '#687572',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#687572',
    fontWeight: '700',
    fontSize: 16,
  },
});