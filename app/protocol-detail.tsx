import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Header, Form } from '../components/protocol-detail/';

export default function ProtocolDetail() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <Form />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  contentContainer: {
    padding: 20
  }
});