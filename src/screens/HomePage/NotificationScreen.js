import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import NotifyPreview from "../../components/view/NotifyPreview";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";
import { lightTheme, darkTheme } from "../../assets/color/Theme";
import InfinityScrollView from "../../components/view/InfinityScrollView";
import UserServices from "../../services/UserServices";

const NotificationScreen = () => {
  const theme = useSelector((state) => state.theme.theme);
  const styles = theme.mode === "light" ? styles_light : styles_dark;

  const notifications = useSelector((state) => state.ui.notifications);
  const { fetchNoti } = UserServices();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <InfinityScrollView
          showsVerticalScrollIndicator={false}
          useLoads={() => fetchNoti(notifications.currentPage, 20)}
        >
          {notifications.rows
            .map((item) => (
              <NotifyPreview data={item} key={uuid.v4()} />
            ))}
        </InfinityScrollView>
      </SafeAreaView>
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
