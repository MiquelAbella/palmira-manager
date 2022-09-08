import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage } from "./components/LandingPage";
import { Form } from "./components/Form";
import { Chart } from "./components/Chart";
import { History } from "./components/History";
import { Settings } from "./components/Settings";
import { NavBar } from "./components/NavBar";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  const { uid } = useSelector((state) => state.auth);

  return (
    <>
      <NavigationContainer>
        {!uid ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="landingPage" component={LandingPage} />
          </Stack.Navigator>
        ) : (
          <>
            <NavBar />
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                animationTypeForReplace: "pop",
                animation: "slide_from_left",
              }}
            >
              <Stack.Screen name="form" component={Form} />
              <Stack.Screen name="chart" component={Chart} />
              <Stack.Screen name="history" component={History} />
              <Stack.Screen name="settings" component={Settings} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </>
  );
}
