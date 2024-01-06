import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        // padding: 15,
        // paddingTop: 50,
        position: "relative",
        zIndex: 1,
        backgroundColor: "#f3f6f9",
    },
    scrollInner: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 10,
    },
    menuItem: {
        paddingTop: 7,
        paddingBottom: 7,
        marginBottom: 15,
    },
    menuSingleItemWrap: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    menuImg: {
        width: 17,
        height: 17,
        objectFit: "contain",
        marginRight: 10,
    },
    menuText: {
        fontSize: 16,
        color: "#00253d",
        textTransform: "uppercase",
        fontFamily: "font-medium"
    },
    topBar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // marginBottom: 25,
        padding: 15,
        paddingTop: 15,
        backgroundColor: "#d6d4ed",
        borderBottomEndRadius: 13,
        borderBottomStartRadius: 13,
    },
    tobBarLeft: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    menu: {
        width: 25,
        height: 25,
        marginRight: 20,
    },
    personName: {
        fontSize: 16,
        color: "#000",
        fontFamily: "font-medium",
    },
    topBarImg: {
        width: 45,
        height: 45,
        objectFit: "cover",
        borderRadius: "50%",
        borderColor: "#fff",
        borderWidth: 2,
    },



    performanceWrap: {
        width: "100%",
        paddingTop: 13,
        paddingBottom: 13,
        borderColor: "#00253d",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 30,
    },
    performanceText: {
        fontSize: 19,
        fontFamily: "font-bold",
        textAlign: "center",
        color: "#00253d",
    },
    examResTop: {
        marginBottom: 40,
    },
    examName: {
        fontSize: 18,
        fontFamily: "font-bold",
        marginBottom: 10,
    },
    totalMark: {
        fontSize: 14,
        fontFamily: "font-medium",
    },
    markCount: {
        fontFamily: "font-bold",
    },


    singleRes: {
        width: "100%",
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    resLeft: {
        width: "60%",
        paddingRight: 15,
        fontSize: 15,
        fontFamily: "font-bold",
    },
    resRight: {
        width: "40%",
        fontSize: 15,
        fontFamily: "font-medium",
        color: "#00253d",
    }

})