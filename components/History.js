import React, { useMemo } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import openMap from "react-native-open-maps";

export const History = () => {
  const { history, position, minimumDistance, language } = useSelector(
    (state) => state.auth
  );

  console.log(position);

  const historyMoments = useMemo(() => {
    let newHistory = history.slice().reverse();
    return history.length ? newHistory : [];
  }, []);

  //distance calculator

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const getDistanceFromLatLonInM = (lat1, lon1, lat2, lon2) => {
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.floor(d * 1000);
  };
  //distance calculator

  //date converter
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  //date converter
  // console.log(formatDate(new Date(history[0][2])));
  return (
    <ScrollView>
      {historyMoments.length ? (
        <View style={styles.historyContainer}>
          {language === "es-ES" ? (
            <>
              <Text style={styles.title}>HISTORIAL</Text>
              <Text style={{ fontSize: 11, width: 200 }}>
                *Si la distáncia es mayor a la distáncia máxima introducida, se
                marcará en rojo
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.title}>HISTÒRIC</Text>
              <Text style={{ fontSize: 11, width: 200 }}>
                *Si la distància és major a la distància màxima introduïda, el
                marcarà en vermell
              </Text>
            </>
          )}
          {historyMoments.map((moment, idx) => {
            let place = moment[0];
            let message = moment[1];
            let timeStamp = moment[2];
            let day = formatDate(new Date(timeStamp));

            let distance = getDistanceFromLatLonInM(
              position[0],
              position[1],
              place[0],
              place[1]
            );
            return (
              <View key={moment[2]}>
                <View style={styles.momentContainer}>
                  <Text>{day}</Text>
                  <Text style={styles.msgText}>{message}</Text>
                  <Text
                    style={{
                      color: distance > minimumDistance ? "red" : "blue",
                      textAlign: "right",
                      fontSize: 12,
                      marginTop: 5,
                    }}
                    onPress={() =>
                      openMap({
                        query: `${place[0]}, ${place[1]}`,
                        // latitude: moment[0][0],
                        // longitude: moment[0][1],
                      })
                    }
                  >
                    {distance > 10
                      ? language === "es-ES"
                        ? `${distance} metros del lugar seleccionado`
                        : `${distance} metres del lloc escollit`
                      : language === "es-ES"
                      ? "Lugar seleccionado"
                      : "Lloc seleccionat"}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <>
          {language === "es-ES" ? (
            <Text style={{ textAlign: "center" }}>
              No hay historial disponible
            </Text>
          ) : (
            <Text style={{ textAlign: "center" }}>
              No hi ha historial disponible
            </Text>
          )}
        </>
      )}
    </ScrollView>
  );
};

let deviceWidth = window.innerWidth;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 40,
    color: "grey",
  },
  historyContainer: {
    alignItems: "center",
  },
  momentContainer: {
    width: 275,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  msgText: {
    fontSize: 15,
  },
});
