import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , Image} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');

 const handleSignUp = () => {
    navigation.navigate('Home', {name, email});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let’s log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or continue with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={require('./assets/apple.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
           <Image source={require('./assets/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./assets/google.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}>Haven’t an account? <Text style={styles.registerLink}>Register</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1877F2',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1877F2',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  or: {
    textAlign: 'center',
    color: '#6C757D',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: "center",
    marginTop: 5
  },
  register: {
    textAlign: 'center',
    color: '#6C757D',
  },
  registerLink: {
    color: '#1877F2',
    fontWeight: 'bold',
  },
});

export default LoginScreen;