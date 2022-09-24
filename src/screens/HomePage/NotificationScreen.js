import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import color from "../../assets/color/color";
import { createStackNavigator } from "@react-navigation/stack";
import NotifyPreview from "../../components/view/NotifyPreview";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";
import { lightTheme, darkTheme } from "../../assets/color/Theme"

const Stack = createStackNavigator();

const NotificationScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  let styles;
  {
    theme.mode === "light" ?
      styles = styles_light
      : styles = styles_dark;
  }

  const notifications = useSelector((state) => state.ui.notifications);

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={notifications.slice(0).reverse()}
          keyExtractor={() => uuid.v4()}
          renderItem={({ item }) => {
            return <NotifyPreview data={item} />;
          }}
        />
      </SafeAreaView> */}
    </View>
  );
};

export default NotificationScreen;

const styles_light = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.FIRST_BACKGROUND_COLOR,
    paddingBottom: 70,
  },
  chatFrame: {
    marginRight: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

const styles_dark = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme.FIRST_BACKGROUND_COLOR,
    paddingBottom: 70,
  },
  chatFrame: {
    marginRight: 16,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
