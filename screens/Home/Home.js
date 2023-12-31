import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, useWindowDimensions, Dimensions, Pressable, Animated, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import dashboardImg from '../../assets/dashboard.png';
import examImg from '../../assets/exam.png';
import analysisImg from '../../assets/analysis.png';
import userImg from '../../assets/user.png';
import powerOffImg from '../../assets/power-off.png';
import { styles } from '../../styles/home';



const data = [
  {
    id: '1',
    title: 'Dashboard',
    link: 'https://example.com/link1',
    imgUrl: dashboardImg,
  },
  {
    id: '2',
    title: 'Create Exam',
    link: 'https://example.com/link2',
    imgUrl: examImg,
  },
  {
    id: '3',
    title: 'My Exam Analysis',
    link: 'https://example.com/link2',
    imgUrl: analysisImg,
  },
  {
    id: '4',
    title: 'My Profile',
    link: 'https://example.com/link2',
    imgUrl: userImg,
  },
  {
    id: '5',
    title: 'Logout',
    link: 'https://example.com/link2',
    imgUrl: powerOffImg,
  },
];



// const getFonts = () => {
//   Font.loadAsync({
//     fontBlack: require("../../assets/fonts/Montserrat-Black.ttf"),
//     fontBlack: require("../../assets/fonts/Montserrat-Bold.ttf"),
//     fontMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
//     fontRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
//     fontlight: require("../../assets/fonts/Montserrat-Light.ttf"),
//   });
// }

const Home = () => {

  const topBarRef = useRef(null);

  const [fontsloaded, setFontsLoaded] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [topBarHeight, setTopBarHeight] = useState(0);

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


    if (topBarRef.current) {
      topBarRef.current.measure((x, y, width, height) => {
        setTopBarHeight(height);
      });
    }
  }, []);


  let ScreenHeight = Dimensions.get("window").height

  const ListItem = ({ title, link, imgUrl, onPress }) => (
    <TouchableOpacity onPress={() => onPress(link)} style={styles.menuItem}>
      <View style={styles.menuSingleItemWrap}>
        <Image
          style={styles.menuImg}
          source={imgUrl}
        />
        <Text style={styles.menuText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePress = (url) => {
    console.log('hi');
  };


  const slideAnim = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    Animated.timing(slideAnim, {
      toValue: isMenuActive ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };


  return (
    <View>
      {
        isMenuActive &&
        <Pressable
          onPress={toggleMenu}
          style={
            {
              width: "100%",
              height: ScreenHeight,
              flex: 1,
              position: "absolute",
              top: 0,
              left: 0,
              backgroundColor: "rgba(0, 63, 104, 0.10)",
              zIndex: 10,
            }
          }
        >
        </Pressable>
      }
      <Animated.View
        style={{
          width: 250,
          height: ScreenHeight,
          backgroundColor: '#fff',
          position: 'absolute',
          top: 0,
          left: slideAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-270, 0],
          }),
          zIndex: 100,
          paddingTop: 50,
          paddingLeft: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem title={item.title} link={item.link} imgUrl={item.imgUrl} onPress={handlePress} />
          )}
        />
      </Animated.View>
      <View style={styles.container}>
        <View style={styles.topBar} ref={topBarRef}>
          <View style={styles.tobBarLeft}>
            <TouchableOpacity onPress={toggleMenu}>
              <Image
                style={styles.menu}
                source={require("../../assets/dots-menu.png")}
              />
            </TouchableOpacity>
            <Text style={styles.personName}>Aryavay Bhosale</Text>
          </View>
          <Text>
            <Image
              style={styles.topBarImg}
              source={require("../../assets/man.jpg")}
            />
          </Text>
        </View>

        <ScrollView style={{ height: ScreenHeight - topBarHeight }}>
          <View style={styles.scrollInner}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInp}
                placeholder='Search'
                placeholderTextColor={"#a0a0a0"}
              />
            </View>
            <View style={styles.examContainer}>
              <View style={styles.singleExam}>
                <Text style={styles.examHeading}>NEET.7.20210821.Chemistry.0152</Text>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Enrollment:</Text>
                  <Text style={styles.examRowRight}>21.08.2021</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Appeared:</Text>
                  <Text style={styles.examRowRight}>21.08.2021</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Result Details:</Text>
                  <Text style={styles.examRowRight}>Attempted</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Marks Obtained:</Text>
                  <Text style={styles.examRowRight}>9/180</Text>
                </View>
                <Pressable style={styles.resultBtn}><Text style={styles.resultBtnText}>Check Result</Text></Pressable>
              </View>


              <View style={styles.singleExam}>
                <Text style={styles.examHeading}>NEET.7.20210821.Chemistry.0152</Text>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Enrollment:</Text>
                  <Text style={styles.examRowRight}>21.08.2021</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Appeared:</Text>
                  <Text style={styles.examRowRight}>21.08.2021</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Result Details:</Text>
                  <Text style={styles.examRowRight}>Attempted</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Marks Obtained:</Text>
                  <Text style={styles.examRowRight}>9/180</Text>
                </View>
                <Pressable style={styles.resultBtn}><Text style={styles.resultBtnText}>Check Result</Text></Pressable>
              </View>

              <View style={styles.singleExam}>
                <Text style={styles.examHeading}>NEET.7.20210821.Chemistry.0152</Text>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Enrollment:</Text>
                  <Text style={styles.examRowRight}>21.08.2021</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Appeared:</Text>
                  <Text style={styles.examRowRight}>21.08.2021</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Result Details:</Text>
                  <Text style={styles.examRowRight}>Attempted</Text>
                </View>
                <View style={styles.examInfoRow}>
                  <Text style={styles.examRowLeft}>Marks Obtained:</Text>
                  <Text style={styles.examRowRight}>9/180</Text>
                </View>
                <Pressable style={styles.resultBtn}><Text style={styles.resultBtnText}>Check Result</Text></Pressable>
              </View>


            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}




export default Home