import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Contactos = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [nombreEnviado, setNombreEnviado] = useState("");
  const [correoEnviado, setCorreoEnviado] = useState("");

  const enviar = () => {
    setNombreEnviado(nombre);
    setCorreoEnviado(correo);
  };

  return (
    <ScrollView style={styles.pantalla}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Contactos</Text>

        <Image
          source={require("@/assets/images/banner03.png")}
          style={styles.banner}
        />

        <View style={styles.formulario}>
          <TextInput
            placeholder="Escribe tu Nombre"
            placeholderTextColor="#77717F"
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            placeholder="Escribe tu Correo"
            placeholderTextColor="#77717F"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
          />

          <TouchableOpacity style={styles.boton} onPress={enviar}>
            <Text style={styles.textoBoton}>ENVIAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultados}>
          <Text style={styles.resultado}>
            Nombre: <Text style={styles.valor}>{nombreEnviado}</Text>
          </Text>

          <Text style={styles.resultado}>
            Correo: <Text style={styles.valor}>{correoEnviado}</Text>
          </Text>
        </View>

        <View style={styles.redes}>
          <TouchableOpacity
            style={[styles.iconoRed, { backgroundColor: "#E5ECFA" }]}
            onPress={() => Linking.openURL("https://www.facebook.com")}
            accessibilityLabel="Abrir Facebook"
          >
            <FontAwesome name="facebook" size={28} color="#5278C7" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconoRed, { backgroundColor: "#F3E5F5" }]}
            onPress={() => Linking.openURL("https://www.instagram.com")}
            accessibilityLabel="Abrir Instagram"
          >
            <FontAwesome name="instagram" size={28} color="#A56AB5" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.iconoRed, { backgroundColor: "#FBE5E8" }]}
            onPress={() => Linking.openURL("https://www.youtube.com")}
            accessibilityLabel="Abrir YouTube"
          >
            <FontAwesome name="youtube-play" size={28} color="#D76F7D" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contactos;

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#F8F6FA",
  },

  container: {
    flex: 1,
    padding: 16,
  },

  titulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#574B63",
    marginBottom: 10,
  },

  banner: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },

  formulario: {
    backgroundColor: "#E9DFF2",
    padding: 16,
    marginVertical: 20,
    borderRadius: 14,
  },

  input: {
    backgroundColor: "#FFFFFF",
    color: "#39313F",
    height: 44,
    marginVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D7C8E2",
  },

  boton: {
    backgroundColor: "#8D79A8",
    padding: 12,
    borderRadius: 9,
    marginTop: 10,
  },

  textoBoton: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },

  resultados: {
    marginTop: 2,
    paddingHorizontal: 8,
  },

  resultado: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    color: "#6B6172",
  },

  valor: {
    color: "#403649",
  },

  redes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
    marginTop: 28,
    marginBottom: 24,
  },

  iconoRed: {
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
