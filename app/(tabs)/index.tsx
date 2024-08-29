import { StyleSheet, View, SafeAreaView, FlatList, SectionList } from 'react-native';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import { Ongoing } from '@/components/protocols/ongoing';

type Participant = {
  avatarUrl: string;
}

export default function HomeScreen() {

  const Hello = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text variant="titleMedium">Hello <Text style={{ fontWeight: 'bold' }} variant="titleMedium">Jane</Text></Text>
        <IconButton
          icon="bell"
          iconColor="black"
          size={20}
          onPress={() => console.log('Pressed')}
          mode="contained"
        />

      </View>
    )
  }

  const Title = () => {
    return (
      <>
        <Hello />
        <View style={styles.titleContainer}>
          <Text style={{ fontWeight: 'bold' }} variant="displaySmall">{"Manage Your\nProtocols"}</Text>
        </View>
      </>
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

      const handleOnPress = () => {
        console.log('Pressed');
      };

      return (
        <Card onPress={() => handleOnPress()} style={{ width: '48%', marginBottom: 20 }} mode="contained">
          <Card.Content>
            <Text style={{ marginBottom: 10 }} variant="bodyMedium">{`${tasks} task`}</Text>
            <Text variant="titleLarge">{name}</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              {
                participants.slice(0, 3).map((participant: Participant, index: number) => (
                  <Avatar.Image source={{ uri: participant.avatarUrl }} style={{ marginRight: -5, zIndex: index }} key={index} size={32} />
                ))
              }
              {
                participants.length > 3 && (
                  <Avatar.Text
                    label={`+${participants.length - 3}`}
                    size={32}
                    style={{ marginRight: -5, zIndex: participants.length, backgroundColor: '#cccccc' }}
                  />
                )
              }

            </View>
          </Card.Content>
        </Card>
      )
    };

    return (
      <View>
        <View style={{ marginBottom: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold' }} variant="titleLarge">Protocols</Text>
          <Button contentStyle={{ flexDirection: 'row-reverse' }} icon="plus" style={{ borderRadius: 10 }} mode="text">Add</Button>
        </View>
        <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }} numColumns={2} data={protocols} renderItem={({item}) => <ProtocolCard {...item} />}></FlatList>
      </View>
    )
  };

  const SECTIONS = [
    {
      data: [
        {
          children: <ProtocolSection />
        }
      ]
    },
    {
      data: [
        {
          children: <Ongoing />
        }
      ]
    }
  ]
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <SectionList style={{ padding: 20 }} ListHeaderComponent={<Title />} sections={SECTIONS} renderItem={({item}) => (item.children)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginBottom: 30
  }
});
