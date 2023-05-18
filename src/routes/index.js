import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stackRoutes";
import Favorite from "../pages/favorite";
import Search from "../pages/search";
import { Ionicons } from "@expo/vector-icons";
import search from "../pages/search";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#003561",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="heart" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
