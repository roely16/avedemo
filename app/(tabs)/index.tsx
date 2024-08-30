import { StyleSheet, View, SafeAreaView, FlatList, SectionList } from 'react-native';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { Ongoing } from '@/components/protocols/ongoing';

type Participant = {
  avatarUrl?: string;
}

type Protocol = {
  id: number;
  name: string;
  tasks: number;
  participants?: Participant[] | null;
}

export default function HomeScreen() {

  const router = useRouter();

  const Hello = () => {
    return (
      <View style={styles.helloContainer}>
        <Text variant="titleMedium">Hello <Text style={styles.boldText} variant="titleMedium">Jane</Text></Text>
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
          <Text style={styles.boldText} variant="displaySmall">{"Manage Your\nProtocols"}</Text>
        </View>
      </>
    )
  }

  const ProtocolSection = () => {

    const protocols: Protocol[] = [
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

    const handleOnPress = () => {
      router.push('/protocol-detail');
    };

    const ProtocolCard = ({ tasks, name, participants = [] }: { tasks: number; name: string; participants?: Participant[] } ) => {

      return (
        <Card onPress={() => handleOnPress()} style={styles.card} mode="contained">
          <Card.Content>
            <Text style={styles.taskText} variant="bodyMedium">{`${tasks} task`}</Text>
            <Text variant="titleLarge">{name}</Text>
            <View style={styles.avatarContainer}>
              {
                participants.slice(0, 3).map((participant: Participant, index: number) => (
                  <Avatar.Image source={{ uri: participant.avatarUrl }} style={[styles.avatarImage, { zIndex: index }]} key={index} size={32} />
                ))
              }
              {
                participants.length > 3 && (
                  <Avatar.Text
                    label={`+${participants.length - 3}`}
                    size={32}
                    style={[styles.avatarText, { zIndex: participants.length }]}
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
          <Button onPress={handleOnPress} contentStyle={{ flexDirection: 'row-reverse' }} icon="plus" style={{ borderRadius: 10 }} mode="text">Add</Button>
        </View>
        <FlatList columnWrapperStyle={{ justifyContent: 'space-between' }} numColumns={2} data={protocols} renderItem={({item}) => <ProtocolCard tasks={item.tasks} name={item.name} participants={item.participants ?? []} />}></FlatList>
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
    <SafeAreaView style={styles.container}>
      <SectionList style={styles.sectionContainer} ListHeaderComponent={<Title />} sections={SECTIONS} renderItem={({item}) => (item.children)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  sectionContainer: {
    padding: 20
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 30
  },
  helloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boldText: {
    fontWeight: 'bold'
  },
  card: {
    width: '48%',
    marginBottom: 20
  },
  taskText: {
    marginBottom: 10
  },
  avatarContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  avatarImage: {
    marginRight: -5
  },
  avatarText: {
    backgroundColor: '#cccccc',
    marginRight: -5
  }
});
