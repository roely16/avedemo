import { View, StyleSheet } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';

export const OngoingCard = () => {
  return (
    <Card style={styles.card} mode="contained">
      <Card.Content>
        <View style={styles.cardHeader}>
          <Chip textStyle={styles.chipText} style={styles.chipContainer}>High priority</Chip>
          <Text>74%</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.boldText} variant="titleMedium">Emergency Protocol Activated</Text>
        </View>
        <View>
          <Text variant="bodyMedium">Due date: <Text style={styles.boldText} variant="bodyMedium">March 6, 10:00 AM</Text></Text>
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e6e6e6'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chipText: {
    color: '#c21ba0'
  },
  chipContainer: {
    backgroundColor: '#f5a4e5',
    borderRadius: 30
  },
  cardBody: {
    marginVertical: 20
  },
  boldText: {
    fontWeight: 'bold'
  }
});