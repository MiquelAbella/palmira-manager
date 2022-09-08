import { Provider } from "react-redux";
import * as Notifications from "expo-notifications";
import { useNetInfo } from "@react-native-community/netinfo";
import * as Updates from "expo-updates";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./Routes";

import { store } from "./store/store";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  const [isConnected, setIsConnected] = useState(true);
  const netInfo = useNetInfo();

  useEffect(() => {
    if (netInfo.details) {
      setIsConnected(netInfo.isConnected);
    }
  }, [netInfo]);

  useEffect(() => {
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        Updates.reloadAsync();
      }
    );
    return () => subscription.remove();
  }, []);

  return isConnected ? (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Palmira</Text>
      <Text>Sin conexion, por favor, conéctate a internet</Text>
    </View>
  );
}

let deviceHeight = window.innerHeight;
let deviceWidth = window.innerWidth;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight,
    width: deviceWidth,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 75,
    color: "grey",
  },
});
