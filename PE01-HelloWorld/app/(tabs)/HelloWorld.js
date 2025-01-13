import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Khoa Nguyen</Text>
      <Text>Team 0</Text>
      <Text>PE 01</Text>
      <Text>MSCS</Text>
      <Text>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
