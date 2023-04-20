import Routes  from './src/routes';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}
