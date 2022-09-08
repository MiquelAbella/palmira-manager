import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../actions/UserActions";

import * as Notifications from "expo-notifications";

export const LoginForm = ({ setIsLoginFormOpen, setIsRegisterFormOpen }) => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);
  const handleOpenLoginForm = () => {
    setIsRegisterFormOpen(true);
    setIsLoginFormOpen(false);
  };

  const handleGoBack = () => {
    setIsLoginFormOpen(false);
    setIsRegisterFormOpen(false);
  };

  const [loginValues, setLoginValues] = useState({
    lemail: "",
    lpassword: "",
  });

  const handleSubmitForm = async () => {
    registerForPushNotificationsAsync();

    let token = (await Notifications.getExpoPushTokenAsync()).data;
    dispatch(startLogin(loginValues, token));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entra</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={loginValues.lemail}
        onChangeText={(text) =>
          setLoginValues({ ...loginValues, lemail: text })
        }
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Contraseña"
        value={loginValues.lpassword}
        onChangeText={(text) =>
          setLoginValues({ ...loginValues, lpassword: text })
        }
      />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableHighlight
          style={styles.submitButton}
          onPress={handleSubmitForm}
        >
          <Text style={styles.button}>Acceda</Text>
        </TouchableHighlight>
      )}
      <View style={styles.buttonsContainer}>
        <TouchableHighlight onPress={handleGoBack}>
          <Text style={styles.backButton}>Atrás</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchable}
          onPress={handleOpenLoginForm}
        >
          <Text style={styles.redirectTxt}>¿No tiene cuenta?</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
};

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
    fontSize: 50,
    color: "grey",
    marginBottom: 30,
  },
  touchable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 25,
  },
  button: {
    color: "grey",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    borderRadius: 7.5,
    marginTop: 25,
    width: 150,
    textAlign: "center",
  },
  touchable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    width: deviceWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  redirectTxt: {
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    color: "grey",
  },
  backButton: {
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    color: "grey",
  },
});
