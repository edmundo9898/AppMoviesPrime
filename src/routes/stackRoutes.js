import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Color from "../utils/color";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes do filme",
          headerTitleStyle: {
            color: Color.text,
          },
          headerTintColor: Color.text,
          headerStyle: {
            backgroundColor: Color.background,
          },
        }}
      />
    </Stack.Navigator>
  );
}
