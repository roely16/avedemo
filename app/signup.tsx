import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Button, Icon, TextInput } from 'react-native-paper';
import { Link } from 'expo-router';
import { getAuth } from '@react-native-firebase/auth';
import { useState } from 'react';


export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Header = () => {
    return (
      <View>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.goBackButton}>
            <Icon source='arrow-left' size={30} />
          </TouchableOpacity>
        </Link>
        <Text variant='displaySmall'>Sign Up Here</Text>
        <Text variant="headlineSmall">Create an account</Text>
      </View>
    )
  }

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      return {
        success: true,
        user: userCredential.user
      };
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        error: error.message
      };
    }
  };

  const Form = (): React.ReactNode => {
    return (
      <View style={styles.formContainer}>
        <View style={styles.formInputContainer}>
          <Text variant='titleMedium'>Name</Text>
          <TextInput dense mode="outlined" />
        </View>
        <View style={styles.formInputContainer}>
          <Text variant='titleMedium'>Email</Text>
          <TextInput onChangeText={setEmail} keyboardType="email-address" dense mode="outlined" />
        </View>
        <View style={styles.formInputContainer}>
          <Text variant='titleMedium'>Password</Text>
          <TextInput secureTextEntry dense mode="outlined" />
        </View>
        <View>
          <Text variant='titleMedium'>Confirm Password</Text>
          <TextInput secureTextEntry dense mode="outlined" />
        </View>
        <Button onPress={handleSignUp} style={styles.confirmButton} mode="contained">Register</Button>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <Form></Form>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: 10,
    marginTop: 30
  },
  goBackButton: {
    marginBottom: 10
  },
  formContainer: {
    marginTop: 30
  },
  formInputContainer: {
    marginBottom: 20
  },
  confirmButton: {
    marginTop: 40,
    borderRadius: 10
  }
});