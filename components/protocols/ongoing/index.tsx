import { View } from "react-native"; 
import { Text, Button } from "react-native-paper";
import { OngoingCard } from "./ongoinCard";

export const Ongoing = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }} variant="titleLarge">Ongoing</Text>
        <Button contentStyle={{ flexDirection: 'row-reverse' }} icon="arrow-right" style={{ borderRadius: 10 }} mode="text">View all</Button>
      </View>
      <View style={{ marginTop: 20 }}>
        <OngoingCard />
      </View>
    </View>
  )
}