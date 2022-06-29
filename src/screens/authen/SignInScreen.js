import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import color from "../../assets/color/color";
import InputText from "../../components/input/InputText";
import InputPass from "../../components/input/InputPass";
import BtnNoLogo from "../../components/button/BtnNoLogo";
import BtnLogo from "../../components/button/BtnLogo";
import * as Animatable from "react-native-animatable";
import useSignIn from "./hooks/useSignIn";
import LoadingScreen from "../onboard/LoadingScreen";
import Navigators from "../../navigators/navigators/Navigators";

const SignInScreen = () => {
  const { navigateToSignUp, navigateToForgotPassword, navigateToHomePage } =
    Navigators();
  const {
    loading,
    error,
    handleLoginUser,
    handlePasswordChange,
    handleEmailChange,
  } = useSignIn();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            //source={require('../../assets/ImageDefault/background_signIn.jpg')}
            style={styles.logo}
            resizeMode="contain"
            source={{
              uri: "https://i.pinimg.com/564x/57/da/ba/57daba61aad2b83b6f8ccbfb6168a0f6.jpg",
            }}
          />
        </View>

        <ScrollView>
          <Animatable.View animation="fadeInUp" duration={1000}>
            <View style={styles.footer}>
              <Image
                source={require("../../assets/ImageDefault/logoApp.png")}
                style={styles.logoApp}
                resizeMode="stretch"
              />

              <Text style={styles.tittle}>TALK - SHARE FOOD </Text>
              <Text style={[styles.tittle, { marginBottom: 15 }]}>
                WITH EVERYONE
              </Text>

              <Text style={styles.intro}>
                When you want to eat, go to the kitchen with “FOOD TALK” to
                enjoy the food by yourself and share it with everyone.
              </Text>

              <InputText
                inputIcon="mail"
                inputName="Email"
                setNameText={handleEmailChange}
              />
              <InputPass
                inputIconLeft="lock"
                inputName="Password"
                setPassText={handlePasswordChange}
              />
              {error ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorPassword}>{error}</Text>
                </Animatable.View>
              ) : null}
              <BtnNoLogo
                loading={loading}
                eventButton={(e) => handleLoginUser(e)}
                nameButton="SIGN IN"
                colorView={color.background}
                colorName={color.textGray}
                widthBorder={2}
                colorBorder={color.textIconSmall}
              />

              <View style={styles.lineView}>
                <View style={styles.lineFirst}></View>
                <Text style={styles.lineText}> or </Text>
                <View style={styles.lineSecond}></View>
              </View>

              <BtnLogo
                eventButton={navigateToHomePage}
                nameButton="SIGN IN WITH GOOGLE"
                colorView={color.primary}
                colorName={color.background}
              />

              <TouchableOpacity onPress={navigateToForgotPassword}>
                <Text
                  style={{
                    marginTop: 10,
                    fontFamily: "Roboto",
                    color: color.textIconSmall,
                    fontWeight: "bold",
                  }}
                >
                  Forgot Password ?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={navigateToSignUp}>
                <Text
                  style={{
                    marginTop: 10,
                    fontFamily: "Roboto",
                    color: color.textIconSmall,
                    fontWeight: "bold",
                  }}
                >
                  New Account ?
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </ScrollView>
      </View>
      {loading ? <LoadingScreen /> : null}
    </>
  );
};

export default SignInScreen;

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.background,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: height - 200,
    width: height * 1.28,
  },
  logoApp: {
    height: 71 * 1.2,
    width: 98 * 1.2,
    marginTop: 25,
  },
  footer: {
    flex: 5,
    backgroundColor: color.background,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  tittle: {
    color: color.textGray,
    fontSize: 26,
    fontFamily: "Roboto",
  },
  intro: {
    marginHorizontal: 15,
    color: color.textIconSmall,
    fontFamily: "Roboto",
    marginBottom: 15,
    textAlign: "center",
  },
  lineView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  lineFirst: {
    width: "38%",
    height: 1,
    backgroundColor: color.textIconSmall,
  },
  lineText: {
    fontSize: 15,
    color: color.textIconSmall,
  },
  lineSecond: {
    width: "38%",
    height: 1,
    backgroundColor: color.textIconSmall,
  },
  errorPassword: {
    color: color.errorColor,
    marginLeft: -30,
    marginTop: -10,
    marginBottom: 10,
  },
});
