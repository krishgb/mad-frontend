import React, {useState} from 'react';
import {Text, TextInput, View, Pressable, StyleSheet, ToastAndroid} from 'react-native';
import {sign} from '../dbs'

export const Signup = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    username: '',
  });

  const signup = async () => {
    const result = await sign(credentials.username, credentials.email, credentials.password)
    if(!result.done){
      ToastAndroid.show(
        result.msg, 
        ToastAndroid.SHORT)
    }else{
      ToastAndroid.show(
        'Signed up successfully', 
        ToastAndroid.SHORT)
    }
  };
  return (
    <View style={styles.formContainer}>
      <View style={styles.form}>
        <TextInput
          placeholderTextColor="#aaa"
          placeholder="Username"
          style={styles.input}
          onChange={e =>
            setCredentials({...credentials, username: e.nativeEvent.text})
          }
        />
        <TextInput
          placeholderTextColor="#aaa"
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          nativeID="email"
          onChange={e =>
            setCredentials({...credentials, email: e.nativeEvent.text})
          }
        />
        <TextInput
          placeholderTextColor="#aaa"
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          nativeID="password"
          onChange={e =>
            setCredentials({...credentials, password: e.nativeEvent.text})
          }
        />

        <Pressable style={styles.btn} onPress={signup}>
          <Text style={styles.btnTxt}>Signup</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    width: '80%',
    borderRadius: 2,
    elevation: 100,
    shadowColor: '#000',
    marginTop: '40%',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  input: {
    color: 'black',
    borderColor: '#166fe5',
    borderWidth: 2,
    width: '100%',
    margin: 15,
    borderRadius: 3,
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },
  btn: {
    marginVertical: 10,
    color: 'black',
    backgroundColor: '#166fe5',
    padding: 10,
    borderRadius: 2,
    paddingHorizontal: 15,
    elevation: 10,
  },
  btnTxt: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});

styles.signInBtn = {
  ...styles.btn,
  backgroundColor: '#000',
};
