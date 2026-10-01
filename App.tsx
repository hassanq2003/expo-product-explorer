import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const products = [
  { id: '1', name: 'Football', price: 2500 },
  { id: '2', name: 'Running Shoes', price: 6500 },
  { id: '3', name: 'Sports Bottle', price: 800 },
  { id: '4', name: 'Training Cones', price: 1200 },
  { id: '5', name: 'Football Gloves', price: 1800 },
];

export default function App() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Explorer</Text>
      <Text style={styles.student}>Hassan Qureshi | 23i3029</Text>

      <TextInput
        style={styles.input}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        style={styles.list}
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.price}>PKR {item.price.toLocaleString()}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No products found.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 24,
    paddingTop: 70,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#172554',
  },
  student: {
    marginTop: 8,
    marginBottom: 24,
    color: '#64748b',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
  },
  list: {
    flexGrow: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#172554',
  },
  price: {
    marginTop: 8,
    color: '#2563eb',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#64748b',
  },
});
