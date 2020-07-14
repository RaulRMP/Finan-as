import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          headerStyle: {
            backgroundColor: "#131313",
            borderBottomWidth: 1,
            borderBottomColor: "#00b94a",
          },
          headerTintColor: "#FFF",
          headerBackTitle: false,
          headerTitle: "Voltar",
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
