import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SegmentedButtons, Text, TextInput, Button } from 'react-native-paper';

const PRIORITIES = [
  {
    value: 'low',
    label: 'Low'
  },
  {
    value: 'medium',
    label: 'Medium'
  },
  {
    value: 'high',
    label: 'High'
  }
]

export const Form = () => {

  const [priority, setPriority] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text variant="titleMedium">Name</Text>
        <TextInput dense mode="outlined" /> 
      </View>
      <View style={styles.inputContainer}>
        <Text variant="titleMedium">Description</Text>
        <TextInput style={styles.inputMultiLine} multiline dense mode="outlined" /> 
      </View>
      <View style={styles.inputContainer}>
        <Text variant="titleMedium">Priority</Text>
        <SegmentedButtons
          value={priority}
          onValueChange={setPriority}
          buttons={PRIORITIES}
        />
      </View>
      <View style={styles.confirmContainer}>
        <Button icon="plus" style={styles.confirmButton} mode="contained">Create Protocol</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  inputContainer: {
    marginBottom: 10
  },
  inputMultiLine: {
    height: 70
  },
  segmentedButton: {
    borderRadius: 10
  },
  confirmContainer: {
    marginTop: 20
  },
  confirmButton: {
    borderRadius: 10,
  }
});