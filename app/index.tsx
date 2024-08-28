import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, TextInput, Button, Divider } from 'react-native-paper'
import { useAuth0 } from 'react-native-auth0';

export default function Login(){

  const { authorize } = useAuth0();

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
      await authorize();
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
    return <Divider style={{ marginVertical: 40 }} />;
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
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text variant='bodyMedium'>Don't have an account? </Text>
        <Text variant='bodyMedium' style={{ color: 'blue' }}>Sign up</Text>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 10, marginTop: 30 }}>
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
  }
})