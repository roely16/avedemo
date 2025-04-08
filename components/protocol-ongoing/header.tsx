import { View, StyleSheet } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

export const Header = () => {

  const router = useRouter();

  const onBack = () => {
    router.back();
  }

  return (
    <View style={styles.container}>
      <IconButton onPress={onBack} icon="arrow-left" size={24} mode="contained" />
      <Text style={styles.boldText} variant="titleLarge">Protocol Details</Text>
      <IconButton icon="bell" size={24} mode="contained" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  boldText: {
    fontWeight: 'bold'
  }
})