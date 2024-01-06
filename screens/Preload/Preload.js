// import { Text } from "galio-framework";
import { useState } from "react";
import { Image, Text, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";



const Preload = () => {

    return (
        <View style={styles.container}>
            <View style={styles.preloadCopntainer}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/logo.jpg")}
                    resizeMode="contain"
                />
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
    preloadCopntainer: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 20
    },
});




export default Preload