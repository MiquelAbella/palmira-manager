import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const LandingPage = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

  const handleOpenLoginForm = () => {
    setIsLoginFormOpen(true);
  };
  return (
    <>
      {!isLoginFormOpen && !isRegisterFormOpen ? (
        <View style={styles.container}>
          <Text style={styles.title}>Palmira</Text>
          <Text style={styles.subtitle}>
            Tu asistente virtual de proximidad para quien mas quieres
          </Text>
          <TouchableHighlight
            style={styles.touchable}
            onPress={handleOpenLoginForm}
          >
            <Text style={styles.button}>Empezar</Text>
          </TouchableHighlight>
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
});
