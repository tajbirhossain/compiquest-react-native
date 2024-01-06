// import { Text } from "galio-framework";
import { useState } from "react";
import { Image, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, View, Button } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";



const ThirdPreload = () => {

    return (
        <View style={styles.thirdContainer}>
            <View style={styles.preloadCopntainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/student.png")}
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
    thirdContainer: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        position: "relative",
        backgroundColor: "#d4f5ff",
    },
    preloadCopntainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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




export default ThirdPreload