import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/ecuador.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Selección Ecuatoriana de Fútbol
      </Text>

      <Text style={styles.subtitle}>
        La Tri representa al Ecuador en las competiciones internacionales de fútbol.
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Apodo</Text>
        <Text style={styles.value}>La Tri</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Confederación</Text>
        <Text style={styles.value}>CONMEBOL</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Director Técnico</Text>
        <Text style={styles.value}>Sebastián Beccacece</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Capitán</Text>
        <Text style={styles.value}>Enner Valencia</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Participaciones en Mundiales</Text>
        <Text style={styles.value}>4</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Mejor participación mundialista</Text>
        <Text style={styles.value}>Octavos de Final (2006)</Text>
      </View>

      <Text style={styles.footer}>
        🇪🇨 ¡Un equipo, una nación, una pasión! 🇪🇨
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  logo: {
    width: 160,
    height: 160,
    marginTop: 20,
    marginBottom: 15,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0033A0',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    elevation: 4,
  },

  label: {
    fontSize: 14,
    color: '#666',
  },

  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#000',
  },

  footer: {
    marginTop: 25,
    marginBottom: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D52B1E',
    textAlign: 'center',
  },
});