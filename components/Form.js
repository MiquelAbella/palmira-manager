import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";

import { startSetSchedule } from "../actions/UserActions";

import openMap from "react-native-open-maps";

export const Form = () => {
  const dispatch = useDispatch();
  const { uid, schedule, lastKnownLocation, isLoading, language } = useSelector(
    (state) => state.auth
  );

  const date = new Date(lastKnownLocation[1]);
  const dateString =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  const goToLocation = () => {
    openMap({
      query: `${lastKnownLocation[0][0]}, ${lastKnownLocation[0][1]}`,
    });
  };

  const handleSubmitForm = () => {
    dispatch(
      startSetSchedule(
        uid,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
      )
    );
  };

  const [monday, setMonday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.monday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );

  const [tuesday, setTuesday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.tuesday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [wednesday, setWednesday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.wednesday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [thursday, setThursday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.thursday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [friday, setFriday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.friday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [saturday, setSaturday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.saturday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );
  const [sunday, setSunday] = useState(() =>
    Object.keys(schedule).length
      ? schedule.sunday
      : {
          zero: "",
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          ten: "",
          eleven: "",
          twelve: "",
          thirteen: "",
          fourteen: "",
          fifteen: "",
          sixteen: "",
          seventeen: "",
          eighteen: "",
          nineteen: "",
          twenty: "",
          twentyone: "",
          twentytwo: "",
          twentythree: "",
        }
  );

  return (
    <>
      <ScrollView>
        {lastKnownLocation.length ? (
          <View style={styles.locationContainer}>
            <TouchableHighlight onPress={goToLocation}>
              <Image
                style={{ height: 50, width: 50 }}
                source={require("../assets/locationIcon.png")}
              />
            </TouchableHighlight>
            <TouchableHighlight onPress={goToLocation}>
              <>
                {language === "es-ES" ? (
                  <Text
                    style={{
                      color: "blue",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    Última ubicación conocida: {dateString}
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: "blue",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    Última ubicació coneguda: {dateString}
                  </Text>
                )}
              </>
            </TouchableHighlight>
            <>
              {language === "es-ES" ? (
                <Text>Desliza para ver mas dias</Text>
              ) : (
                <Text>Llisca per veure més dies</Text>
              )}
            </>
          </View>
        ) : (
          <>
            {language === "es-ES" ? (
              <>
                <Text
                  style={{ color: "blue", textAlign: "center", marginTop: 10 }}
                >
                  No hay datos de la última ubicación
                </Text>
                <Text style={{ textAlign: "center", marginTop: 10 }}>
                  Desliza para ver mas dias
                </Text>
              </>
            ) : (
              <>
                <Text
                  style={{ color: "blue", textAlign: "center", marginTop: 10 }}
                >
                  No hi ha dades de l'última ubicació
                </Text>
                <Text style={{ textAlign: "center", marginTop: 10 }}>
                  Llisca per veure més dies
                </Text>
              </>
            )}
          </>
        )}
        <ScrollView horizontal={true}>
          <View style={styles.dayContainer}>
            {isLoading && <ActivityIndicator />}
            <>
              {language === "es-ES" ? <Text>Lunes</Text> : <Text>Dilluns</Text>}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={monday.zero}
              onChangeText={(text) => setMonday({ ...monday, zero: text })}
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={monday.one}
              onChangeText={(text) => setMonday({ ...monday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={monday.two}
              onChangeText={(text) => setMonday({ ...monday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={monday.three}
              onChangeText={(text) => setMonday({ ...monday, three: text })}
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={monday.four}
              onChangeText={(text) => setMonday({ ...monday, four: text })}
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={monday.five}
              onChangeText={(text) => setMonday({ ...monday, five: text })}
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={monday.six}
              onChangeText={(text) => setMonday({ ...monday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={monday.seven}
              onChangeText={(text) => setMonday({ ...monday, seven: text })}
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={monday.eight}
              onChangeText={(text) => setMonday({ ...monday, eight: text })}
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={monday.nine}
              onChangeText={(text) => setMonday({ ...monday, nine: text })}
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={monday.ten}
              onChangeText={(text) => setMonday({ ...monday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={monday.eleven}
              onChangeText={(text) => setMonday({ ...monday, eleven: text })}
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={monday.twelve}
              onChangeText={(text) => setMonday({ ...monday, twelve: text })}
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={monday.thirteen}
              onChangeText={(text) => setMonday({ ...monday, thirteen: text })}
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={monday.fourteen}
              onChangeText={(text) => setMonday({ ...monday, fourteen: text })}
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={monday.fifteen}
              onChangeText={(text) => setMonday({ ...monday, fifteen: text })}
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={monday.sixteen}
              onChangeText={(text) => setMonday({ ...monday, sixteen: text })}
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={monday.seventeen}
              onChangeText={(text) => setMonday({ ...monday, seventeen: text })}
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={monday.eighteen}
              onChangeText={(text) => setMonday({ ...monday, eighteen: text })}
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={monday.nineteen}
              onChangeText={(text) => setMonday({ ...monday, nineteen: text })}
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={monday.twenty}
              onChangeText={(text) => setMonday({ ...monday, twenty: text })}
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={monday.twentyone}
              onChangeText={(text) => setMonday({ ...monday, twentyone: text })}
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={monday.twentytwo}
              onChangeText={(text) => setMonday({ ...monday, twentytwo: text })}
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={monday.twentythree}
              onChangeText={(text) =>
                setMonday({ ...monday, twentythree: text })
              }
            />
          </View>
          <View style={styles.dayContainer}>
            <>
              {language === "es-ES" ? (
                <Text>Martes</Text>
              ) : (
                <Text>Dimarts</Text>
              )}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.zero}
              onChangeText={(text) => setTuesday({ ...tuesday, zero: text })}
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.one}
              onChangeText={(text) => setTuesday({ ...tuesday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.two}
              onChangeText={(text) => setTuesday({ ...tuesday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.three}
              onChangeText={(text) => setTuesday({ ...tuesday, three: text })}
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.four}
              onChangeText={(text) => setTuesday({ ...tuesday, four: text })}
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.five}
              onChangeText={(text) => setTuesday({ ...tuesday, five: text })}
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.six}
              onChangeText={(text) => setTuesday({ ...tuesday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.seven}
              onChangeText={(text) => setTuesday({ ...tuesday, seven: text })}
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.eight}
              onChangeText={(text) => setTuesday({ ...tuesday, eight: text })}
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.nine}
              onChangeText={(text) => setTuesday({ ...tuesday, nine: text })}
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.ten}
              onChangeText={(text) => setTuesday({ ...tuesday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.eleven}
              onChangeText={(text) => setTuesday({ ...tuesday, eleven: text })}
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.twelve}
              onChangeText={(text) => setTuesday({ ...tuesday, twelve: text })}
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.thirteen}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, thirteen: text })
              }
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.fourteen}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, fourteen: text })
              }
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.fifteen}
              onChangeText={(text) => setTuesday({ ...tuesday, fifteen: text })}
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.sixteen}
              onChangeText={(text) => setTuesday({ ...tuesday, sixteen: text })}
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.seventeen}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, seventeen: text })
              }
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.eighteen}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, eighteen: text })
              }
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.nineteen}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, nineteen: text })
              }
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.twenty}
              onChangeText={(text) => setTuesday({ ...tuesday, twenty: text })}
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.twentyone}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, twentyone: text })
              }
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.twentytwo}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, twentytwo: text })
              }
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={tuesday.twentythree}
              onChangeText={(text) =>
                setTuesday({ ...tuesday, twentythree: text })
              }
            />
          </View>
          <View style={styles.dayContainer}>
            <>
              {language === "es-ES" ? (
                <Text>Miércoles</Text>
              ) : (
                <Text>Dimecres</Text>
              )}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.zero}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, zero: text })
              }
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.one}
              onChangeText={(text) => setWednesday({ ...wednesday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.two}
              onChangeText={(text) => setWednesday({ ...wednesday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.three}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, three: text })
              }
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.four}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, four: text })
              }
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.five}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, five: text })
              }
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.six}
              onChangeText={(text) => setWednesday({ ...wednesday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.seven}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, seven: text })
              }
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.eight}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, eight: text })
              }
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.nine}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, nine: text })
              }
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.ten}
              onChangeText={(text) => setWednesday({ ...wednesday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.eleven}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, eleven: text })
              }
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.twelve}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, twelve: text })
              }
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.thirteen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, thirteen: text })
              }
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.fourteen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, fourteen: text })
              }
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.fifteen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, fifteen: text })
              }
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.sixteen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, sixteen: text })
              }
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.seventeen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, seventeen: text })
              }
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.eighteen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, eighteen: text })
              }
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.nineteen}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, nineteen: text })
              }
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.twenty}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, twenty: text })
              }
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.twentyone}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, twentyone: text })
              }
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.twentytwo}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, twentytwo: text })
              }
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={wednesday.twentythree}
              onChangeText={(text) =>
                setWednesday({ ...wednesday, twentythree: text })
              }
            />
          </View>
          <View style={styles.dayContainer}>
            <>
              {language === "es-ES" ? <Text>Jueves</Text> : <Text>Dijous</Text>}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.zero}
              onChangeText={(text) => setThursday({ ...thursday, zero: text })}
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.one}
              onChangeText={(text) => setThursday({ ...thursday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.two}
              onChangeText={(text) => setThursday({ ...thursday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.three}
              onChangeText={(text) => setThursday({ ...thursday, three: text })}
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.four}
              onChangeText={(text) => setThursday({ ...thursday, four: text })}
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.five}
              onChangeText={(text) => setThursday({ ...thursday, five: text })}
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.six}
              onChangeText={(text) => setThursday({ ...thursday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.seven}
              onChangeText={(text) => setThursday({ ...thursday, seven: text })}
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.eight}
              onChangeText={(text) => setThursday({ ...thursday, eight: text })}
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.nine}
              onChangeText={(text) => setThursday({ ...thursday, nine: text })}
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.ten}
              onChangeText={(text) => setThursday({ ...thursday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.eleven}
              onChangeText={(text) =>
                setThursday({ ...thursday, eleven: text })
              }
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.twelve}
              onChangeText={(text) =>
                setThursday({ ...thursday, twelve: text })
              }
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.thirteen}
              onChangeText={(text) =>
                setThursday({ ...thursday, thirteen: text })
              }
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.fourteen}
              onChangeText={(text) =>
                setThursday({ ...thursday, fourteen: text })
              }
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.fifteen}
              onChangeText={(text) =>
                setThursday({ ...thursday, fifteen: text })
              }
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.sixteen}
              onChangeText={(text) =>
                setThursday({ ...thursday, sixteen: text })
              }
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.seventeen}
              onChangeText={(text) =>
                setThursday({ ...thursday, seventeen: text })
              }
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.eighteen}
              onChangeText={(text) =>
                setThursday({ ...thursday, eighteen: text })
              }
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.nineteen}
              onChangeText={(text) =>
                setThursday({ ...thursday, nineteen: text })
              }
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.twenty}
              onChangeText={(text) =>
                setThursday({ ...thursday, twenty: text })
              }
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.twentyone}
              onChangeText={(text) =>
                setThursday({ ...thursday, twentyone: text })
              }
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.twentytwo}
              onChangeText={(text) =>
                setThursday({ ...thursday, twentytwo: text })
              }
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={thursday.twentythree}
              onChangeText={(text) =>
                setThursday({ ...thursday, twentythree: text })
              }
            />
          </View>
          <View style={styles.dayContainer}>
            <>
              {language === "es-ES" ? (
                <Text>Viernes</Text>
              ) : (
                <Text>Divendres</Text>
              )}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={friday.zero}
              onChangeText={(text) => setFriday({ ...friday, zero: text })}
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={friday.one}
              onChangeText={(text) => setFriday({ ...friday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={friday.two}
              onChangeText={(text) => setFriday({ ...friday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={friday.three}
              onChangeText={(text) => setFriday({ ...friday, three: text })}
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={friday.four}
              onChangeText={(text) => setFriday({ ...friday, four: text })}
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={friday.five}
              onChangeText={(text) => setFriday({ ...friday, five: text })}
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={friday.six}
              onChangeText={(text) => setFriday({ ...friday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={friday.seven}
              onChangeText={(text) => setFriday({ ...friday, seven: text })}
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={friday.eight}
              onChangeText={(text) => setFriday({ ...friday, eight: text })}
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={friday.nine}
              onChangeText={(text) => setFriday({ ...friday, nine: text })}
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={friday.ten}
              onChangeText={(text) => setFriday({ ...friday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={friday.eleven}
              onChangeText={(text) => setFriday({ ...friday, eleven: text })}
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={friday.twelve}
              onChangeText={(text) => setFriday({ ...friday, twelve: text })}
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={friday.thirteen}
              onChangeText={(text) => setFriday({ ...friday, thirteen: text })}
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={friday.fourteen}
              onChangeText={(text) => setFriday({ ...friday, fourteen: text })}
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={friday.fifteen}
              onChangeText={(text) => setFriday({ ...friday, fifteen: text })}
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={friday.sixteen}
              onChangeText={(text) => setFriday({ ...friday, sixteen: text })}
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={friday.seventeen}
              onChangeText={(text) => setFriday({ ...friday, seventeen: text })}
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={friday.eighteen}
              onChangeText={(text) => setFriday({ ...friday, eighteen: text })}
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={friday.nineteen}
              onChangeText={(text) => setFriday({ ...friday, nineteen: text })}
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={friday.twenty}
              onChangeText={(text) => setFriday({ ...friday, twenty: text })}
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={friday.twentyone}
              onChangeText={(text) => setFriday({ ...friday, twentyone: text })}
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={friday.twentytwo}
              onChangeText={(text) => setFriday({ ...friday, twentytwo: text })}
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={friday.twentythree}
              onChangeText={(text) =>
                setFriday({ ...friday, twentythree: text })
              }
            />
          </View>
          <View style={styles.dayContainer}>
            <>
              {language === "es-ES" ? (
                <Text>Sábado</Text>
              ) : (
                <Text>Dissabte</Text>
              )}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.zero}
              onChangeText={(text) => setSaturday({ ...saturday, zero: text })}
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.one}
              onChangeText={(text) => setSaturday({ ...saturday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.two}
              onChangeText={(text) => setSaturday({ ...saturday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.three}
              onChangeText={(text) => setSaturday({ ...saturday, three: text })}
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.four}
              onChangeText={(text) => setSaturday({ ...saturday, four: text })}
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.five}
              onChangeText={(text) => setSaturday({ ...saturday, five: text })}
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.six}
              onChangeText={(text) => setSaturday({ ...saturday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.seven}
              onChangeText={(text) => setSaturday({ ...saturday, seven: text })}
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.eight}
              onChangeText={(text) => setSaturday({ ...saturday, eight: text })}
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.nine}
              onChangeText={(text) => setSaturday({ ...saturday, nine: text })}
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.ten}
              onChangeText={(text) => setSaturday({ ...saturday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.eleven}
              onChangeText={(text) =>
                setSaturday({ ...saturday, eleven: text })
              }
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.twelve}
              onChangeText={(text) =>
                setSaturday({ ...saturday, twelve: text })
              }
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.thirteen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, thirteen: text })
              }
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.fourteen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, fourteen: text })
              }
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.fifteen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, fifteen: text })
              }
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.sixteen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, sixteen: text })
              }
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.seventeen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, seventeen: text })
              }
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.eighteen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, eighteen: text })
              }
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.nineteen}
              onChangeText={(text) =>
                setSaturday({ ...saturday, nineteen: text })
              }
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.twenty}
              onChangeText={(text) =>
                setSaturday({ ...saturday, twenty: text })
              }
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.twentyone}
              onChangeText={(text) =>
                setSaturday({ ...saturday, twentyone: text })
              }
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.twentytwo}
              onChangeText={(text) =>
                setSaturday({ ...saturday, twentytwo: text })
              }
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={saturday.twentythree}
              onChangeText={(text) =>
                setSaturday({ ...saturday, twentythree: text })
              }
            />
          </View>
          <View style={styles.sundayContainer}>
            <>
              {language === "es-ES" ? (
                <Text>Domingo</Text>
              ) : (
                <Text>Diumenge</Text>
              )}
            </>
            <Text style={styles.hourText}>00:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.zero}
              onChangeText={(text) => setSunday({ ...sunday, zero: text })}
            />
            <Text style={styles.hourText}>01:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.one}
              onChangeText={(text) => setSunday({ ...sunday, one: text })}
            />
            <Text style={styles.hourText}>02:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.two}
              onChangeText={(text) => setSunday({ ...sunday, two: text })}
            />
            <Text style={styles.hourText}>03:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.three}
              onChangeText={(text) => setSunday({ ...sunday, three: text })}
            />
            <Text style={styles.hourText}>04:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.four}
              onChangeText={(text) => setSunday({ ...sunday, four: text })}
            />
            <Text style={styles.hourText}>05:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.five}
              onChangeText={(text) => setSunday({ ...sunday, five: text })}
            />
            <Text style={styles.hourText}>06:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.six}
              onChangeText={(text) => setSunday({ ...sunday, six: text })}
            />
            <Text style={styles.hourText}>07:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.seven}
              onChangeText={(text) => setSunday({ ...sunday, seven: text })}
            />
            <Text style={styles.hourText}>08:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.eight}
              onChangeText={(text) => setSunday({ ...sunday, eight: text })}
            />
            <Text style={styles.hourText}>09:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.nine}
              onChangeText={(text) => setSunday({ ...sunday, nine: text })}
            />
            <Text style={styles.hourText}>10:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.ten}
              onChangeText={(text) => setSunday({ ...sunday, ten: text })}
            />
            <Text style={styles.hourText}>11:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.eleven}
              onChangeText={(text) => setSunday({ ...sunday, eleven: text })}
            />
            <Text style={styles.hourText}>12:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.twelve}
              onChangeText={(text) => setSunday({ ...sunday, twelve: text })}
            />
            <Text style={styles.hourText}>13:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.thirteen}
              onChangeText={(text) => setSunday({ ...sunday, thirteen: text })}
            />
            <Text style={styles.hourText}>14:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.fourteen}
              onChangeText={(text) => setSunday({ ...sunday, fourteen: text })}
            />
            <Text style={styles.hourText}>15:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.fifteen}
              onChangeText={(text) => setSunday({ ...sunday, fifteen: text })}
            />
            <Text style={styles.hourText}>16:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.sixteen}
              onChangeText={(text) => setSunday({ ...sunday, sixteen: text })}
            />
            <Text style={styles.hourText}>17:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.seventeen}
              onChangeText={(text) => setSunday({ ...sunday, seventeen: text })}
            />
            <Text style={styles.hourText}>18:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.eighteen}
              onChangeText={(text) => setSunday({ ...sunday, eighteen: text })}
            />
            <Text style={styles.hourText}>19:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.nineteen}
              onChangeText={(text) => setSunday({ ...sunday, nineteen: text })}
            />
            <Text style={styles.hourText}>20:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.twenty}
              onChangeText={(text) => setSunday({ ...sunday, twenty: text })}
            />
            <Text style={styles.hourText}>21:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.twentyone}
              onChangeText={(text) => setSunday({ ...sunday, twentyone: text })}
            />
            <Text style={styles.hourText}>22:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.twentytwo}
              onChangeText={(text) => setSunday({ ...sunday, twentytwo: text })}
            />
            <Text style={styles.hourText}>23:00</Text>
            <TextInput
              style={styles.input}
              value={sunday.twentythree}
              onChangeText={(text) =>
                setSunday({ ...sunday, twentythree: text })
              }
            />
          </View>
        </ScrollView>
        {isLoading ? (
          <View style={styles.touchable}>
            <ActivityIndicator size="large" />
          </View>
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
      </ScrollView>
    </>
  );
};

let deviceWidth = window.innerWidth;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 2,
    width: deviceWidth,
    alignItems: "center",
  },
  locationContainer: {
    height: 100,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 25,
  },
  hourText: {
    fontSize: 10,
    color: "grey",
  },
  button: {
    marginTop: 30,
    marginBottom: 50,
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
  dayContainer: {
    display: "flex",
    marginLeft: 50,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
  },
  sundayContainer: {
    display: "flex",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
  },
});
