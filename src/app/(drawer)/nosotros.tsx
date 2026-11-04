import { router } from "expo-router";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Nosotros() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>NOSOTROS</Text>

        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil
          cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur, officiis.
        </Text>

        <Image
          source={require("@/assets/images/banner01.png")}
          style={styles.imagen}
        />

        <TouchableOpacity
          style={styles.boton}
          onPress={() => router.push("/(drawer)/contactos")}
        >
          <Text style={styles.textoBoton}>CLICK AQUÍ</Text>
        </TouchableOpacity>

        <Text style={styles.parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil
          cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur, officiis.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },

  parrafo: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginVertical: 10,
  },

  imagen: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    marginVertical: 15,
  },

  boton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    width: "80%",
    marginVertical: 15,
  },

  textoBoton: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
