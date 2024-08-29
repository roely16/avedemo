import { View } from 'react-native';
import { Card, Text, Chip } from 'react-native-paper';

export const OngoingCard = () => {
  return (
    <Card style={{ backgroundColor: '#e6e6e6' }} mode="contained">
      <Card.Content>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip textStyle={{ color: '#c21ba0' }} style={{ backgroundColor: '#f5a4e5', borderRadius: 30 }}>High priority</Chip>
          <Text>74%</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold' }} variant="titleMedium">Emergency Protocol Activated</Text>
        </View>
        <View>
          <Text variant="bodyMedium">Due date: <Text style={{ fontWeight: 'bold' }} variant="bodyMedium">March 6, 10:00 AM</Text></Text>
        </View>
      </Card.Content>
    </Card>
  )
}