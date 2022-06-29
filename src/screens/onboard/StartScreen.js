import { StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import Onboarding from "react-native-onboarding-swiper";

const StartScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("SignIn")}
      onDone={() => navigation.navigate("SignIn")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("../../assets/onboardImages/onboard_1.png")}
            />
          ),
          title: "Onboarding 1",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("../../assets/onboardImages/onboard_2.png")}
            />
          ),
          title: "Onboarding 2",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={require("../../assets/onboardImages/onboard_3.png")}
            />
          ),
          title: "Onboarding 3",
          subtitle: "Done with React Native Onboarding Swiper",
        },
      ]}
    />
    // <View style={styles.container}>
    //     <Image
    //         //source={require('../../assets/ImageDefault/background_signIn.jpg')}
    //         style={styles.startBackground}
    //         resizeMode='contain'
    //         source={{
    //             uri: 'https://i.pinimg.com/564x/5c/4d/d4/5c4dd42c81f93566d840f7e43dbbc2fd.jpg',
    //         }}
    //     />
    //     <Text style={styles.tittle}>Let's          Cooking</Text>
    //     <BtnNoLogo eventButton={eventSignIn} nameButton='START' colorView={color.primary} colorName={color.background} />
    // </View>
  );
};

export default StartScreen;

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
  },
  tittle: {
    color: color.background,
    fontSize: 60,
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
  },
  startBackground: {
    width: 750,
    height: 850,
    position: "absolute",
  },
});
