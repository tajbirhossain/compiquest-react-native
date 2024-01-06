// import { Text } from "galio-framework";
import { useEffect, useState } from "react";
import { Image, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, View, Button } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';



const FinalPreload = () => {
    const [fontsloaded, setFontsLoaded] = useState(false);

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

    }, []);


    return (
        <View style={styles.filalContainer}>
            <View style={styles.preloadCopntainer}>
                <Text style={styles.finalTopText}>Student Exam &amp; Report Cards</Text>
                <Image
                    style={styles.logo}
                    source={require("../../assets/graduation-card.png")}
                    resizeMode="contain"
                />
                <Pressable style={styles.nextBtn}>
                    <Image
                        style={styles.nextImg}
                        source={require("../../assets/next.png")}
                        resizeMode="contain"
                    />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    filalContainer: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        position: "relative",
        backgroundColor: "#d4fffb",
    },
    preloadCopntainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    finalTopText: {
        width: 200,
        fontSize: 25,
        fontFamily: "font-medium",
        textAlign: "center",
        marginBottom: 40,
    },
    logo: {
        width: 350,
        height: 350,
        marginBottom: 40,
        objectFit: "contain",
    },
    nextBtn: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: "#003f68",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    nextImg: {
        width: 20,
        height: 20,
        objectFit: "contain",
    },
});




export default FinalPreload