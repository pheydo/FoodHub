import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Product from "./Screens/Product";
import Details from "./Screens/Details";
import Detailschicken from "./Screens/Detailschicken"


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Home} name="MyDrawer" />

        <Stack.Screen component={Product} name="Product" />

        <Stack.Screen component={Details} name="Details" />
        <Stack.Screen component={Detailschicken} name="Details" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
