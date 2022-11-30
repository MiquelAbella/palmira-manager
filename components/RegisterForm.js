import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import { startRegister } from "../actions/UserActions";

export const RegisterForm = ({ setIsLoginFormOpen, setIsRegisterFormOpen }) => {
  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    let token = (await Notifications.getExpoPushTokenAsync()).data;
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    if (token) {
      dispatch(startRegister(registerValues, token));
    } else {
      Alert.alert(
        "Necesitamos que acepte el permiso para un correcto funcionamiento de la app",
        "",
        [{ text: "OK" }]
      );
    }
  };

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const handleOpenLoginForm = () => {
    setIsLoginFormOpen(true);
    setIsRegisterFormOpen(false);
  };
  const handleGoBack = () => {
    setIsLoginFormOpen(false);
    setIsRegisterFormOpen(false);
  };
  const [registerValues, setRegisterValues] = useState({
    rname: "",
    remail: "",
    rpassword1: "",
    rpassword2: "",
    rphone: "",
  });

  const handleSubmitForm = () => {
    const { rname, remail, rpassword1, rpassword2, rphone } = registerValues;
    let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!remail.match(emailPattern)) {
      Alert.alert("Introduce un email válido", "", [{ text: "OK" }]);
      return;
    }
    if (rpassword1 !== rpassword2) {
      Alert.alert("Las contraseñas deben coincidir", "", [{ text: "OK" }]);
      return;
    }
    if (rpassword1.length < 5) {
      Alert.alert("La contraseña debe tener al menos 5 caracteres", "", [
        { text: "OK" },
      ]);
      return;
    }

    if (
      rname === "" ||
      remail === "" ||
      rpassword1 === "" ||
      rpassword2 === "" ||
      rphone === ""
    ) {
      Alert.alert("Por favor, rellene todos los campos", "", [{ text: "OK" }]);
    } else {
      registerForPushNotificationsAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Regístrate</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la persona cuidada"
        value={registerValues.rname}
        onChangeText={(text) =>
          setRegisterValues({ ...registerValues, rname: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={registerValues.remail}
        onChangeText={(text) =>
          setRegisterValues({ ...registerValues, remail: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono del cuidador"
        value={registerValues.rphone}
        onChangeText={(text) =>
          setRegisterValues({ ...registerValues, rphone: text })
        }
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Contraseña"
        value={registerValues.rpassword1}
        onChangeText={(text) =>
          setRegisterValues({ ...registerValues, rpassword1: text })
        }
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Repita contraseña"
        value={registerValues.rpassword2}
        onChangeText={(text) =>
          setRegisterValues({ ...registerValues, rpassword2: text })
        }
      />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitForm}
        >
          <Text style={styles.button}>Crea usuario</Text>
        </TouchableOpacity>
      )}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Text style={styles.backButton}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={handleOpenLoginForm}
        >
          <Text style={styles.redirectTxt}>¿Ya tiene cuenta?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
    marginBottom: 10,
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
