import { StyleSheet, View, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function HomeScreen() {

  const Hello = () => {
    return (
      <Text variant="titleMedium">Hello <Text style={{ fontWeight: 'bold' }} variant="titleMedium">Jane</Text></Text>
    )
  }

  const Title = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={{ fontWeight: 'bold' }} variant="displaySmall">{"Manage Your\nProtocols"}</Text>
      </View>
    )
  }

  const ProtocolSection = () => {

    const protocols = [
      {
        id: 1,
        name: 'Emergency Alarm',
        tasks: 3,
        participants: [
          {
            avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male'
          },
          {
            avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female'
          },
          {
            avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel'
          }
        ]
      },
      {
        id: 2,
        name: 'Fire Alarm',
        tasks: 3
      },
      {
        id: 3,
        name: 'AI Assistant App Design',
        tasks: 3
      }
    ];

    const ProtocolCard = ({ tasks, name, participants = [] }: { tasks: number; name: string; participants: Array } ) => {
      return (
        <Card style={{ width: '48%', marginBottom: 20 }} mode="contained">
          <Card.Content>
            <Text variant="bodyMedium">{`${tasks} task`}</Text>
            <Text variant="titleLarge">{name}</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              {
                participants.map((participant, index) => (
                  <Avatar.Image source={{ uri: participant.avatarUrl }} style={{ marginRight: -5, zIndex: index }} key={index} size={32} />
                ))
              }
            </View>
          </Card.Content>
        </Card>
      )
    };

    return (
      <View style={{ marginTop: 30 }}>
        <View style={{ marginBottom: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }} variant="titleLarge">Protocols</Text>
          <Button icon="plus" style={{ borderRadius: 10 }} mode="text">Add</Button>
        </View>
        <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }} numColumns={2} data={protocols} renderItem={({item}) => <ProtocolCard {...item} />}></FlatList>
      </View>
    )
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ padding: 20 }}>
        <Hello />
        <Title />
        <ProtocolSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20
  }
});
