import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation, useNavigationState } from "@react-navigation/native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export const NavBar = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const screenName = useNavigationState(
    (
      state = {
        index: 0,
        key: "stack-2wZrYA7Y0vIAMPzf-PZkK",
        routeNames: ["form", "chart", "history", "settings"],
        routes: [
          {
            key: "form-byvwQ8oMB8Pn9EzE7S23p",
            name: "form",
            params: undefined,
          },
        ],
        stale: false,
        type: "stack",
      }
    ) => state.routes[state.index].name
  );

  return (
    <View
      style={{
        paddingTop: insets.top + 20,
        backgroundColor: "#f2f2f0",
        height: 120,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("form");
        }}
      >
        <View style={screenName === "form" && styles.active}>
          <Image
            style={styles.navIcon}
            source={require("../assets/formIcon.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("chart");
        }}
      >
        <View style={screenName === "chart" && styles.active}>
          <Image
            style={styles.navIcon}
            source={require("../assets/chartIcon.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("history");
        }}
      >
        <View style={screenName === "history" && styles.active}>
          <Image
            style={styles.navIcon}
            source={require("../assets/historyIcon.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("settings");
        }}
      >
        <View style={screenName === "settings" && styles.active}>
          <Image
            style={styles.navIcon}
            source={require("../assets/settingsIcon.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navIcon: {
    height: 40,
    width: 40,
  },
  nav: {
    backgroundColor: "#f2f2f0",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  active: {
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "grey",
  },
});
