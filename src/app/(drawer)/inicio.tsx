import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Viaje del Mundo</Text>

      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.imagen}
      />

      <Text style={styles.parrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil
        cupiditate.
      </Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push("/(drawer)/contactos")}
      >
        <Text style={styles.textoBoton}>Click Aquí</Text>
      </TouchableOpacity>

      <Text style={styles.derechos}>
        © 2026 Ashley Andres Cubas{"\n"}
        Todos los derechos reservados.
      </Text>
    </View>
  );
};

export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  imagen: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },

  parrafo: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 10,
    width: "80%",
    marginTop: 10,
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  derechos: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 12,
    color: "gray",
    fontStyle: "italic",
  },
});
