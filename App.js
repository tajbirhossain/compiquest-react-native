import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import Home from './screens/Home/Home';
import Preload from './screens/Preload/Preload';
import SecondPreload from './screens/Preload/SecondPreload';
import ThirdPreload from './screens/Preload/ThirdPreload';
import FinalPreload from './screens/Preload/FinalPreload';
import ExamResult from './screens/Exam-Result/ExamResult';
import QuestionResult from './screens/QuestionResult/QuestionResult';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Home />
      {/* <Preload /> */}
      {/* <SecondPreload /> */}
      {/* <ThirdPreload /> */}
      {/* <FinalPreload /> */}
      {/* <ExamResult /> */}
      {/* <QuestionResult /> */}
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