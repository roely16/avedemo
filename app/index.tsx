import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router';
import { Text, TextInput, Button, Divider } from 'react-native-paper'

export default function Login(){

  const Header = () => {
    return (
      <View>
        <Text variant='displaySmall'>Login Here</Text>
        <Text variant="headlineSmall">Sign in to your account</Text>
      </View>
    )
  };

  const Form = () => {

    const onSubmit = async () => {
      router.push('/(tabs)');
    };
    return (
      <View style={styles.form}>
        <View>
          <Text variant='titleMedium'>Username</Text>
          <TextInput dense mode="outlined" />
        </View>
        <View style={styles.passwordContainer}>
          <Text variant='titleMedium'>Password</Text>
          <TextInput dense secureTextEntry mode="outlined" />
        </View>
        <Button onPress={onSubmit} style={styles.confirmButton} mode="contained">Login</Button>
      </View>
    )
  }

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
        <Form />
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