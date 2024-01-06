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




    singleQuestionWrap: {
        marginBottom: 40,
    },
    questionTop: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    questionNo: {
        fontFamily: "font-bold",
        fontSize: 20,
        marginRight: 15,
    },
    questionRes: {
        fontFamily: "font-medium",
        color: "#000",
        fontSize: 17,
    },
    questionInfo: {
        padding: 15,
        backgroundColor: "#ffe9d480",
        borderRadius: 8,
        elevation: 5,

        // Shadow styles for iOS and Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    examName: {
        fontSize: 16,
        fontFamily: "font-bold",
        marginBottom: 16,
    },
    attemptTitle: {
        fontSize: 14,
        fontFamily: "font-semibold",
        marginBottom: 5
    },
    attemptAns: {
        fontSize: 14,
        fontFamily: "font-regular",
        marginBottom: 10,
    },
    corrTitle: {
        fontSize: 14,
        fontFamily: "font-semibold",
        marginBottom: 5
    },
    corrAns: {
        fontSize: 14,
        fontFamily: "font-regular",
        marginBottom: 25,
    },
    solutionText: {
        fontSize: 12,
        fontFamily: "font-regular",
        marginBottom: 4,
    },
    examSolImgWrap: {
        width: "100%",
        height: 150,
        backgroundColor: "#fff",
    },
    examSolution: {
        width: "100%",
        height: 100,
    }

})