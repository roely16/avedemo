import { View, SafeAreaView, Platform, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

export default function Login(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 10 }}>
        <Text variant='displaySmall'>Login Here</Text>
        <Text variant="headlineSmall">Sign in to your account</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})