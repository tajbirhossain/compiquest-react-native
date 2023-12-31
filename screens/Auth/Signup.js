import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [mobile, setMobile] = useState("");
    const [parentsMobile, setParentsMobile] = useState("");
    const [exams, setExams] = useState({
        cet: false,
        jee: false,
        neet: false,
    });


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

    const handleCheckboxChange = (exam) => {
        setExams((prevExams) => ({
            ...prevExams,
            [exam]: !prevExams[exam],
        }));
    };

    const handleSignup = () => {
        // Add your signup logic here
        console.log("Signup button clicked");
    };

    return (
        <View style={styles.container}>
            <View style={styles.signupContainer}>
                <View style={styles.signupTop}>
                    <Image
                        style={styles.logo}
                        source={require("../../assets/logo.png")}
                        resizeMode="contain"
                    />
                    <Text style={styles.signUpText}>Sign Up</Text>
                </View>
                <View style={styles.inpWrap}>
                    <Text style={styles.inpLabel}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        placeholderTextColor="#c7c7c7"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <Text style={styles.inpLabel}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="yourdomain@email.com"
                        placeholderTextColor="#c7c7c7"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <Text style={styles.inpLabel}>College/Institute</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your College/Institute Name"
                        placeholderTextColor="#c7c7c7"
                        value={college}
                        onChangeText={(text) => setCollege(text)}
                    />
                    <Text style={styles.inpLabel}>Mobile</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="+91 900000000"
                        placeholderTextColor="#c7c7c7"
                        value={mobile}
                        onChangeText={(text) => setMobile(text)}
                    />
                    <Text style={styles.inpLabel}>Parent's Mobile</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="+91 900000000"
                        placeholderTextColor="#c7c7c7"
                        value={parentsMobile}
                        onChangeText={(text) => setParentsMobile(text)}
                    />
                    <View style={styles.checkboxContainer}>
                        <View style={styles.checkboxItem}>
                            <BouncyCheckbox
                                size={20}
                                fillColor="#aaa"
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: "#aaa" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textContainerStyle={{ display: "none" }}
                                isChecked={exams.cet}
                                onPress={() => handleCheckboxChange("cet")}
                            />
                            <Text style={styles.checkboxLabel}>CET</Text>
                        </View>

                        <View style={styles.checkboxItem}>
                            <BouncyCheckbox
                                size={20}
                                fillColor="#aaa"
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: "#aaa" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textContainerStyle={{ display: "none" }}
                                isChecked={exams.jee}
                                onPress={() => handleCheckboxChange("jee")}
                            />
                            <Text style={styles.checkboxLabel}>JEE</Text>
                        </View>

                        <View style={styles.checkboxItem}>
                            <BouncyCheckbox
                                size={20}
                                fillColor="#aaa"
                                unfillColor="#FFFFFF"
                                iconStyle={{ borderColor: "#aaa" }}
                                innerIconStyle={{ borderWidth: 2 }}
                                textContainerStyle={{ display: "none" }}
                                isChecked={exams.neet}
                                onPress={() => handleCheckboxChange("neet")}
                            />
                            <Text style={styles.checkboxLabel}>NEET</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                        <Text style={styles.signupButtonText}>SIGN UP</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        position: "relative",
    },
    signupContainer: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        alignItems: "center",
    },
    signupTop: {
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
        marginBottom: 20,
    },
    signUpText: {
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
    checkboxContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 40,
    },
    checkboxItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxLabel: {
        marginLeft: 6,
        color: "black",
        fontFamily: "font-regular"
    },
    signupButton: {
        backgroundColor: "#003f68",
        padding: 15,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
        marginBottom: 30,
    },
    signupButtonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "font-medium"
    },
});

export default Signup;
