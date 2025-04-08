import { View, StyleSheet } from 'react-native';
import { Card, Chip, Text } from 'react-native-paper';

export const OngoingCard = () => {
  return (
    <Card style={styles.card} mode="contained">
      <Card.Title title="Emergency Protocol" />
      <Card.Content>
        <View style={styles.statusContainer}>
          <Text>10:00 am - 12:00 am</Text>
          <Chip style={styles.chip}>On Going</Chip>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chip: {
    backgroundColor: '#fffdde',
    borderRadius: 20
  }
})