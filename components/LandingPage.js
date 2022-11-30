import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  Linking,
} from "react-native";
import * as Location from "expo-location";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Modal from "react-native-modal";
import locationIcon from "../assets/locationIcon.png";

export const LandingPage = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handlePress = () => {
    Linking.openURL("https://miquelabella.github.io/palmira-desktop/");
  };
  const handleOpenLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const getDataFromLocalStorage = async () => {
    let response = await AsyncStorage.getItem("permissions");

    if (response === "true") {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const handleAcceptLocationPermission = () => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      let { status } = await Location.requestBackgroundPermissionsAsync();

      if (status === "granted") {
        await AsyncStorage.setItem("permissions", "true");
      } else {
        await AsyncStorage.setItem("permissions", "false");
      }
    })();
    setIsModalVisible(false);
  };

  const handleDenyLocationPermission = async () => {
    await AsyncStorage.setItem("permissions", "true");
    setIsModalVisible(false);
  };
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Image source={locationIcon} style={{ height: 50, width: 50 }} />
          <Text style={{ width: 275, fontSize: 15 }}>
            Palmira necesita obtener la ubicación de la persona cuidada para
            almacenar los datos del lugar en que ha usado la aplicación.
          </Text>
          <Text style={{ width: 275, fontSize: 15 }}>
            Palmira necesita obtener la ubicación en segundo plano de la persona
            cuidada para enviarte su ubicación en caso de que salga fisicamente
            del radio máximo establecido por ti incluso cuando la aplicación
            esté cerrada o no esté en uso. Los datos se pueden usar para apoyar
            la publicidad.
          </Text>
          <Text style={{ width: 275, fontSize: 15 }}>
            Se pedirá que se acepten los permisos en su aplicación.
          </Text>
          <Button title="Permitir" onPress={handleAcceptLocationPermission} />
          <Button title="Denegar" onPress={handleDenyLocationPermission} />
        </View>
      </Modal>
      {!isLoginFormOpen && !isRegisterFormOpen ? (
        <View style={styles.container}>
          <Text style={styles.title}>Palmira</Text>
          <Text style={styles.subtitle}>
            Tu asistente virtual de proximidad para quien mas quieres
          </Text>
          <TouchableOpacity
            style={styles.touchable}
            onPress={handleOpenLoginForm}
          >
            <Text style={styles.button}>Empezar</Text>
          </TouchableOpacity>
        </View>
      ) : isRegisterFormOpen ? (
        <RegisterForm
          setIsLoginFormOpen={setIsLoginFormOpen}
          setIsRegisterFormOpen={setIsRegisterFormOpen}
        />
      ) : (
        <LoginForm
          setIsRegisterFormOpen={setIsRegisterFormOpen}
          setIsLoginFormOpen={setIsLoginFormOpen}
        />
      )}
      <Button title={"Política de privacidad"} onPress={handlePress} />
    </>
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
    fontSize: 75,
    color: "grey",
  },
  subtitle: {
    width: 250,
    textAlign: "center",
    color: "grey",
  },
  button: {
    color: "grey",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    borderRadius: 7.5,
    marginTop: 25,
    width: 100,
    textAlign: "center",
  },
  touchable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: 500,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
