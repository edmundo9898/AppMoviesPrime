import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stackRoutes";
import Favorite from "../pages/favorite";


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#003561',
                borderTopWidth: 0,
            }
          }}
        >
            <Tab.Screen name="StackRoutes" component={StackRoutes}/>
            <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
    )
}