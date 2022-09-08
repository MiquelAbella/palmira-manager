import React, { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Switch,
  ActivityIndicator,
} from "react-native";
import Slider from "@react-native-community/slider";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { startPostSettings } from "../actions/UserActions";

export const Settings = () => {
  const dispatch = useDispatch();

  const {
    uid,
    phone,
    elderName,
    minimumDistance,
    position,
    isLoading,
    language,
  } = useSelector((state) => state.auth);

  const [settingsValues, setSettingsValues] = useState({
    phone: phone ? phone : "",
    elderName: elderName ? elderName : "",
    position: position.length
      ? position
      : [41.59166037366354, 0.6460271847924614],
    minimumDistance: minimumDistance ? minimumDistance : 1000,
    areNotificationsActive: true,
    language: language ? language : "es-ES",
  });

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    setSettingsValues({
      ...settingsValues,
      areNotificationsActive: isEnabled,
    });
  };

  const initialRegion = {
    latitude: settingsValues.position[0],
    longitude: settingsValues.position[1],
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const handleSubmitForm = () => {
    dispatch(startPostSettings(uid, settingsValues));
    // console.log(settingsValues);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {settingsValues.language === "es-ES" ? (
          <Text style={styles.hourText}>
            El idioma afectará el audio que escuche la persona cuidada
          </Text>
        ) : (
          <Text style={styles.hourText}>
            L' idioma afectarà l'audio que escolti la persona cuidada
          </Text>
        )}
        <View style={styles.langSelectorContainer}>
          <TouchableHighlight
            style={[
              styles.langSelector,
              {
                backgroundColor:
                  settingsValues.language === "es-ES"
                    ? "#4a84f7"
                    : "transparent",
                borderColor:
                  settingsValues.language === "es-ES" ? "#4a84f7" : "black",
              },
            ]}
            onPress={() =>
              setSettingsValues({ ...settingsValues, language: "es-ES" })
            }
          >
            <Text
              style={{
                color: settingsValues.language === "es-ES" ? "white" : "black",
              }}
            >
              Castellano
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[
              styles.langSelector,
              {
                backgroundColor:
                  settingsValues.language === "ca" ? "#4a84f7" : "transparent",
                borderColor:
                  settingsValues.language === "ca" ? "#4a84f7" : "black",
              },
            ]}
            onPress={() =>
              setSettingsValues({ ...settingsValues, language: "ca" })
            }
          >
            <Text
              style={{
                color: settingsValues.language === "ca" ? "white" : "black",
              }}
            >
              Català
            </Text>
          </TouchableHighlight>
        </View>
        {settingsValues.language === "es-ES" ? (
          <Text style={styles.hourText}>Nombre de la persona cuidada</Text>
        ) : (
          <Text style={styles.hourText}>Nom de la persona cuidada</Text>
        )}
        <TextInput
          style={styles.input}
          value={settingsValues.elderName}
          onChangeText={(text) => {
            setSettingsValues({ ...settingsValues, elderName: text });
          }}
        />
        {settingsValues.language === "es-ES" ? (
          <Text style={styles.hourText}>Teléfono de la persona cuidadora</Text>
        ) : (
          <Text style={styles.hourText}>Telèfon de la persona cuidadora</Text>
        )}
        <TextInput
          style={styles.input}
          value={settingsValues.phone}
          keyboardType="numeric"
          onChangeText={(text) =>
            setSettingsValues({ ...settingsValues, phone: text })
          }
        />
        {settingsValues.language === "es-ES" ? (
          <Text style={styles.hourText}>Activar notificaciones</Text>
        ) : (
          <Text style={styles.hourText}>Activar notificacions</Text>
        )}
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={settingsValues.areNotificationsActive}
        />
        {settingsValues.language === "es-ES" ? (
          <Text style={styles.hourText}>
            Lugar des de donde se calculará la distancia
          </Text>
        ) : (
          <Text style={styles.hourText}>
            Lloc des d'on es calcularà la distància
          </Text>
        )}
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          onPress={(e) => {
            let { latitude, longitude } = e.nativeEvent.coordinate;
            setSettingsValues({
              ...settingsValues,
              position: [latitude, longitude],
            });
          }}
        >
          {settingsValues.position.length ? (
            <Marker
              coordinate={{
                latitude: settingsValues.position[0],
                longitude: settingsValues.position[1],
              }}
            />
          ) : null}
        </MapView>
        {settingsValues.language === "es-ES" ? (
          <Text style={styles.hourText}>
            Distancia mínima para enviar notificación
          </Text>
        ) : (
          <Text style={styles.hourText}>
            Distància mínima per enviar notificacions
          </Text>
        )}
        <Text>{settingsValues.minimumDistance} metros</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={50}
          maximumValue={2500}
          minimumTrackTintColor="#45edb5"
          maximumTrackTintColor="#000000"
          value={settingsValues.minimumDistance}
          step={10}
          onValueChange={(value) =>
            setSettingsValues({ ...settingsValues, minimumDistance: value })
          }
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <TouchableHighlight
            style={styles.touchable}
            onPress={handleSubmitForm}
          >
            <Text onPress={handleSubmitForm} style={styles.button}>
              Guardar
            </Text>
          </TouchableHighlight>
        )}
      </View>
    </ScrollView>
  );
};

let deviceWidth = window.innerWidth;

const styles = StyleSheet.create({
  hourText: {
    fontSize: 12.5,
    color: "grey",
    marginBottom: 5,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  container: {
    marginTop: 30,
    padding: 2,
    width: deviceWidth,
    alignItems: "center",
  },
  langSelectorContainer: {
    width: 250,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 25,
  },
  langSelector: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: 100,
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 25,
  },
  map: {
    width: Dimensions.get("window").width - 100,
    height: Dimensions.get("window").height - 200,
    marginBottom: 30,
  },
  button: {
    color: "grey",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#e3e3e3",
    padding: 10,
    borderRadius: 7.5,
    width: 100,
    alignSelf: "center",
    textAlign: "center",
  },
  touchable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
