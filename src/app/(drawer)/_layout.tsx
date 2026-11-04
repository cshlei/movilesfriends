import { FontAwesome } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="inicio"
        options={{
          drawerLabel: "Inicio",
          title: "INICIO",
          drawerIcon: () => <FontAwesome name="home" size={24} color="red" />,
        }}
      />

      <Drawer.Screen
        name="nosotros"
        options={{
          drawerLabel: "Nosotros",
          title: "NOSOTROS",
          drawerIcon: () => <FontAwesome name="users" size={24} color="blue" />,
        }}
      />

      <Drawer.Screen
        name="contactos"
        options={{
          drawerLabel: "Contactos",
          title: "CONTACTOS",
          drawerIcon: () => (
            <FontAwesome name="phone" size={24} color="green" />
          ),
        }}
      />
    </Drawer>
  );
}
