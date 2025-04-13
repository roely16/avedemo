import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Link } from 'expo-router';
import { Text, Button, Divider } from 'react-native-paper'
import { Form } from './login/components/Form';
import { useLogin } from './login/hooks/useLogin';

export default function Login(){

  const { handleLogin, email, password, setEmail, setPassword, isLoading } = useLogin();

  const Header = () => {
    return (
      <View>
        <Text variant='displaySmall'>Login Here</Text>
        <Text variant="headlineSmall">Sign in to your account</Text>
      </View>
    )
  };

  const OptionsDivider = () => {
    return <Divider style={styles.divider} />;
  };

  const SocialLogin = () => {
    return (
      <View style={styles.socialLoginContainer}>
        <Button icon="google" style={[styles.button, { marginBottom: 20 }]} mode="contained">Sign in with Google</Button>
        <Button icon="apple" style={styles.button} mode="contained">Sign in with Apple</Button>
      </View>
    )
  };

  const SignUpOption = () => {
    return (
      <View style={styles.signUpContainer}>
        <Text variant='bodyMedium'>Don't have an account? </Text>
        <Link href="/signup">
          <Text variant='bodyMedium' style={styles.signUpLink}>Sign up</Text>
        </Link>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <Form email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={handleLogin} isLoading={isLoading} />
        <OptionsDivider />
        <SocialLogin />
        <SignUpOption />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: 10,
    marginTop: 30
  },
  form: {
    marginTop: 30
  },
  passwordContainer: {
    marginTop: 20
  },
  button: {
    borderRadius: 10
  },
  confirmButton: {
    marginTop: 20,
    borderRadius: 10
  },
  socialLoginContainer: {
    marginTop: 0
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  signUpLink: {
    color: 'blue'
  },
  divider: {
    marginVertical: 40
  }
})