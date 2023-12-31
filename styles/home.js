import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        // padding: 15,
        // paddingTop: 50,
        position: "relative",
        zIndex: 1,
        backgroundColor: "#eceff2",
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
        backgroundColor: "#c0bde2",
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
        color: "#fff",
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


    searchContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1,
        marginBottom: 35,
    },
    searchInp: {
        flex: 1,
        height: 45,
        borderRadius: 8,
        backgroundColor: "#fff",
        fontFamily: "font-regular",
        paddingLeft: 10,
        paddingRight: 6,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        zIndex: 1,
    },



    examContainer: {
        width: "100%",
    },
    singleExam: {
        width: "100%",
        backgroundColor: "#fff1ec",
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderRadius: 8,
        padding: 16,
        marginBottom: 15,
    },
    examHeading: {
        fontFamily: "font-bold",
        fontSize: 18,
        marginBottom: 16,
    },
    examInfoRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 13,
    },
    examRowLeft: {
        width: "55%",
        fontFamily: "font-medium",
        fontSize: 14,
    },
    examRowRight: {
        width: "45%",
        fontFamily: "font-bold",
        fontSize: 14,
    },
    resultBtn: {
        width: 130,
        height: 42,
        borderRadius: 50,
        backgroundColor: "#00253d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    resultBtnText: {
        fontFamily: "font-medium",
        fontSize: 15,
        color: "#fff",
    },

})