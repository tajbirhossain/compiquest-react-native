import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import Home from './screens/Home/Home';
import Preload from './screens/Preload/Preload';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Preload /> */}
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});