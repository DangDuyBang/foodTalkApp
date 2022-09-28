import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import color from "../../assets/color/color";
import { CheckBox } from "react-native-elements";
import BtnNoLogo from "../../components/button/BtnNoLogo";
import { lightTheme, darkTheme } from "../../assets/color/Theme";
import { useSelector } from "react-redux";

const FeedbackScreen = ({ navigation }) => {
  const theme = useSelector((state) => state.theme.theme);

  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const text_COLOR =
    theme.mode === "light"
      ? lightTheme.SECOND_TEXT_COLOR
      : darkTheme.SECOND_TEXT_COLOR;

  navigation.setOptions({
    title: "Feed back",
  });

  const [checked1, setchecked1] = useState(false);
  const [checked2, setchecked2] = useState(false);
  const [checked3, setchecked3] = useState(false);
  const [checked4, setchecked4] = useState(false);

  const handleChangePassword = () => {
    alert("Send Feedback Successfully");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.bodyView}>
          <View>
            <Text style={styles.introText}>
              Hi, Glad you have experienced the application. Your feedback will
              be very valuable. We would greatly appreciate it if you could give
              us sincere reviews about our application. {"\n"}
              Firstly, Can you give us know your problem
            </Text>
            <View style={styles.checkBoxView}>
              <CheckBox
                checked={checked1}
                onPress={() => setchecked1(!checked1)}
              />
              <Text style={styles.textCheckBox}>Experience</Text>
            </View>
            <View style={styles.checkBoxView}>
              <CheckBox
                checked={checked2}
                onPress={() => setchecked2(!checked2)}
              />
              <Text style={styles.textCheckBox}>Function</Text>
            </View>
            <View style={styles.checkBoxView}>
              <CheckBox
                checked={checked3}
                onPress={() => setchecked3(!checked3)}
              />
              <Text style={styles.textCheckBox}>Interactive</Text>
            </View>
            <View style={styles.checkBoxView}>
              <CheckBox
                checked={checked4}
                onPress={() => setchecked4(!checked4)}
              />
              <TextInput
                placeholder="Others..."
                placeholderTextColor={darkTheme.HIDE_ICON_COLOR}
                maxLength={25}
                style={styles.inputInfo}
              />
            </View>
          </View>

          <View style={styles.infoOptionView}>
            <Text style={styles.inforOptions}>Tittle</Text>
            <TextInput
              placeholder="Type the tittle of feedback"
              placeholderTextColor={darkTheme.HIDE_ICON_COLOR}
              maxLength={25}
              style={styles.inputInfo}
            />
          </View>
          <View style={styles.infoOptionView}>
            <Text style={styles.inforOptions}>Description</Text>
            <TextInput
              placeholder="Write detail description"
              maxLength={500}
              multiline={true}
              style={styles.inputContent}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <BtnNoLogo
            nameButton="Send Feedback"
            colorView={color.primary}
            colorName={color.background}
            eventButton={handleChangePassword}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedbackScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    paddingBottom: 10,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: lightTheme.SECOND_TEXT_COLOR,
    marginLeft: 15,
  },
  bodyView: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  introText: {
    fontFamily: "Roboto",
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 15,
  },
  infoOptionView: {
    marginBottom: 10,
  },
  inforOptions: {
    fontFamily: "Roboto",
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputInfo: {
    borderBottomWidth: 0.2,
    paddingVertical: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    color: lightTheme.SECOND_TEXT_COLOR,
  },
  inputContent: {
    marginTop: 5,
    paddingVertical: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    backgroundColor: lightTheme.INPUT_COLOR,
    borderRadius: 10,
    height: 250,
  },
  checkBoxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCheckBox: {
    fontFamily: "Roboto",
    color: lightTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 15,
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    paddingBottom: 10,
  },
  topView: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 7,
    paddingHorizontal: 15,
  },
  topText: {
    fontFamily: "Roboto",
    fontSize: 22,
    fontWeight: "bold",
    color: darkTheme.SECOND_TEXT_COLOR,
    marginLeft: 15,
  },
  bodyView: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  introText: {
    fontFamily: "Roboto",
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 15,
  },
  infoOptionView: {
    marginBottom: 10,
  },
  inforOptions: {
    fontFamily: "Roboto",
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputInfo: {
    borderBottomWidth: 0.2,
    paddingVertical: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    color: darkTheme.SECOND_TEXT_COLOR,
  },
  inputContent: {
    marginTop: 5,
    paddingVertical: 10,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlignVertical: "top",
    backgroundColor: darkTheme.INPUT_COLOR,
    borderRadius: 10,
    height: 250,
  },
  checkBoxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCheckBox: {
    fontFamily: "Roboto",
    color: darkTheme.SECOND_TEXT_COLOR,
    fontWeight: "bold",
    fontSize: 15,
  },
});
