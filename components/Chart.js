import React, { useMemo, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";

import { LineChart } from "react-native-chart-kit";

export const Chart = () => {
  const { history, language } = useSelector((state) => state.auth);

  const getLabels = () => {
    let labels = [];
    if (history[0]) {
      let firstDay = history[0][2];

      let dateToConvert = new Date(firstDay).toLocaleDateString();

      let firstDayDate = new Date(dateToConvert);

      let firstDateMilliseconds = new Date(firstDayDate).getTime();

      const date = new Date().getTime();

      for (let i = firstDateMilliseconds; i < date; i += 86400000) {
        let date = new Date(i).toLocaleDateString();

        let splittedDate = date.split(/\//);
        labels.push(
          [splittedDate[1], splittedDate[0], "20" + splittedDate[2]].join("/")
        );
      }
    }
    let labelsToShow;

    if (labels.length < 5) {
      labelsToShow = labels;
    } else {
      labelsToShow = [
        labels[0],
        labels[Math.floor(labels.length / 4)],
        labels[Math.floor((labels.length * 3) / 4)],
        labels[labels.length - 1],
      ];
    }

    return [labels, labelsToShow];
  };
  let labels = getLabels();

  const getOcurrences = () => {
    let days = [];

    history.map((day) => {
      days.push(formatDate(new Date(day[2])));
    });

    let count = {};

    for (const element of days) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

    labels[0].map((element) => {
      if (!Object.keys(count).includes(element)) {
        count = { ...count, element: 0 };
      }
    });

    return Object.values(count);
  };
  //

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const chartConfig = {
    backgroundGradientFrom: "#f2f2f0",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#f2f2f0",
    backgroundGradientToOpacity: 0.5,
    decimalPlaces: 0,
    color: () => `blue`,

    barPercentage: 1,
  };

  return (
    <View style={styles.container}>
      {Object.keys(history).length ? (
        <>
          {language === "es-ES" ? (
            <Text style={styles.legend}>Veces/dia</Text>
          ) : (
            <Text style={styles.legend}>Vegades/dia</Text>
          )}
          <View>
            <LineChart
              data={{
                // labels: labels[1],
                datasets: [
                  {
                    data: getOcurrences(),
                    strokeWidth: 2,
                  },
                ],
              }}
              width={screenWidth}
              height={screenHeight - 80}
              chartConfig={chartConfig}
              withInnerLines={false}
              fromZero={true}
              withDots={true}
              withOuterLines={false}
              withHorizontalLabels={true}
              bezier
            />
          </View>
        </>
      ) : (
        <>
          {language === "es-ES" ? (
            <Text>Aún no hay datos para mostrar en la gráfica</Text>
          ) : (
            <Text>Encara no hi ha dades per mostrar a la gràfica</Text>
          )}
        </>
      )}
    </View>
  );
};

let screenWidth = window.innerWidth;

const styles = StyleSheet.create({
  nav: {
    marginTop: 5,
  },
  container: {
    marginTop: 5,
    padding: 2,
    width: screenWidth,
    alignItems: "center",
  },
  legend: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 20,
    color: "grey",
  },
});

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
