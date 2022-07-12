import { StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import Onboarding from "react-native-onboarding-swiper";

let bgOnb = "#FFEFDC"

const StartScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("SignIn")}
      onDone={() => navigation.navigate("SignIn")}
      pages={[
        {
          backgroundColor: bgOnb,
          image: (
            <Image
              style={styles.imageOnboard}
              source={require("../../assets/onboardImages/learnfood.png")}
            />
          ),
          title: "Learn Cooking",
          subtitle: "Hi, Welcome to FoodTalk that providing exciting knowledge about food in the world. Learning to cook is never difficult. Let's go !",
        },
        {
          backgroundColor: bgOnb,
          image: (
            <Image
              style={styles.imageOnboard}
              source={require("../../assets/onboardImages/sharefood.png")}
            />
          ),
          title: "Share Food",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: bgOnb,
          image: (
            <Image
              style={styles.imageOnboard}
              source={require("../../assets/onboardImages/connectfriend.png")}
            />
          ),
          title: "Connect with Friends",
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
  imageOnboard: {
    width: 300,
    height: 300
  }
});
