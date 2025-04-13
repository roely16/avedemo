import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-paper';
import { Link } from 'expo-router';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Form } from './signup/components/Form';
import { useSignUp } from './signup/hooks/useSignUp';

const Header = () => {
  return (
    <View>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.goBackButton}>
          <Icon source="arrow-left" size={30} />
        </TouchableOpacity>
      </Link>
      <Text variant="displaySmall">Sign Up Here</Text>
      <Text variant="headlineSmall">Create an account</Text>
    </View>
  );
};

export interface SignUpResponse {
  success: boolean;
  user?: FirebaseAuthTypes.User;
  error?: string;
}

export default function SignUp() {

  const {
    name,
    setName,
    email,
    password,
    confirmPassword,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSignUp,
    isLoading
  } = useSignUp();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <Form
          name={name}
          setName={setName}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          setEmail={setEmail}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          onSubmit={handleSignUp}
          isLoading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}

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
