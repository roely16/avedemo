import { View, SafeAreaView, StyleSheet } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { useAuth0 } from 'react-native-auth0';

export default function Login(){

  const { authorize } = useAuth0();

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <Text variant='displaySmall'>Login Here</Text>
        <Text variant="headlineSmall">Sign in to your account</Text>
        <Form />
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
  confirmButton: {
    marginTop: 20,
    borderRadius: 10
  }
})