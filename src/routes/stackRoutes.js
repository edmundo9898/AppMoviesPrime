import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import Detail from "../pages/detail";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
              options={{
                headerShown: false,
              }}
            name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}