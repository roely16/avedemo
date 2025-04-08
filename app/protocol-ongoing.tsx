import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Header, OngoingCard } from '../components/protocol-ongoing/';

export default function ProtocolOngoing() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Header />
        <OngoingCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  contentContainer: {
    padding: 20
  }
})