import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/ecuador.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>
        Selección Ecuatoriana de Fútbol
      </Text>

      <Text style={styles.subtitle}>
        Bienvenido a la aplicación informativa de La Tri
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/home' as any)}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD100',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 220,
    height: 220,
    marginBottom: 25,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0033A0',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    color: '#333',
    marginTop: 15,
    textAlign: 'center',
  },

  button: {
    marginTop: 40,
    backgroundColor: '#0033A0',
    paddingVertical: 14,
    paddingHorizontal: 45,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});