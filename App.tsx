import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>
      <Text style={styles.name}>Hassan Qureshi</Text>
      <Text style={styles.roll}>23i3029</Text>
      <Text style={styles.subtitle}>My first Expo feature</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#172554',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2563eb',
  },
  roll: {
    fontSize: 18,
    marginTop: 8,
    color: '#475569',
  },
  subtitle: {
    marginTop: 20,
    fontSize: 15,
    color: '#64748b',
  },
});
