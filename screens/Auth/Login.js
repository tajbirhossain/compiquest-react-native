// import { Text } from "galio-framework";
import { useEffect, useState } from "react";
import { Image, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';



const Login = () => {
  const [isChecked, setIsChecked] = useState(false)


  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    async function loadResourcesAsync() {
      try {
        await Font.loadAsync({
          "font-black": require("../../assets/fonts/Montserrat-Black.ttf"),
          "font-bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
          "font-medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
          "font-regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
          "font-light": require("../../assets/fonts/Montserrat-Light.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setFontsLoaded(true);
        await SplashScreen.hideAsync();
      }
    }

    loadResourcesAsync();
  }, [])


  const CustomLabel = ({ text, checkedValue, changeChecked }) => (
    <Text style={{ marginLeft: 6, color: "black", fontFamily: "font-regular" }} onPress={() => changeChecked(!checkedValue)}>{text}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginTop}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
            resizeMode="contain"
          />
          <Text style={styles.signInText}>Sign In</Text>
        </View>
        <View style={styles.inpWrap}>
          <Text style={styles.inpLabel}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Your_Username"
            placeholderTextColor={"#c7c7c7"}
          />
          <Text style={styles.inpLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="***** ***"
            placeholderTextColor={"#c7c7c7"}
            secureTextEntry
          />
          <View style={styles.checkboxWrap}>
            <BouncyCheckbox
              size={20}
              fillColor="#aaa"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#aaa" }}
              innerIconStyle={{ borderWidth: 2, }}
              textContainerStyle={{ display: "none", }}
              disableBuiltInState
              isChecked={isChecked}
              onPress={() => { setIsChecked(!isChecked) }}
            />
            <CustomLabel text="Remember me" checkedValue={isChecked} changeChecked={setIsChecked} />
          </View>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.createNewText}>Create new account? <Text style={styles.createSignup}>Sign up</Text></Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    position: "relative"
  },
  loginContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  loginTop: {
    width: "100%",
    height: 310,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d6d4ed",
    padding: 25,
    marginBottom: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  signInText: {
    color: "#003f68",
    fontSize: 20,
    fontFamily: "font-bold",
  },
  inpWrap: {
    width: "100%",
    padding: 25,
  },
  inpLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "font-medium"
  },
  input: {
    width: "100%",
    height: 40,
    // backgroundColor: "#f0eff5",
    // paddingLeft: 10,
    // paddingRight: 7,
    marginBottom: 30,
    color: "#000",
    fontSize: 20,
    fontFamily: "font-medium"
  },
  checkboxWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  forgotPass: {
    color: "#aaa",
    marginBottom: 15,
    fontFamily: "font-regular",
  },
  loginButton: {
    backgroundColor: "#003f68",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "font-medium"
  },
  createNewText: {
    color: "#aaa",
    textAlign: "center",
    fontFamily: "font-bold",
  },
  createSignup: {
    color: "#003f68",
  },
});




export default Login