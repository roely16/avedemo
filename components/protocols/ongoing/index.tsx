import { View, StyleSheet } from "react-native"; 
import { Text, Button } from "react-native-paper";
import { OngoingCard } from "./ongoinCard";

export const Ongoing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.boldText} variant="titleLarge">Ongoing</Text>
        <Button contentStyle={styles.reverseButton} icon="arrow-right" mode="text">View all</Button>
      </View>
      <View style={styles.cardContainer}>
        <OngoingCard />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30
  },
  titleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  boldText: {
    fontWeight: 'bold'
  },
  reverseButton: {
    flexDirection: 'row-reverse'
  },
  cardContainer: {
    marginTop: 20
  }
})