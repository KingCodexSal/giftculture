import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import ForgotPassword from "./screens/ForgotPassword";
import CustomHeader from "./components/CustomHeader";
import VerifyEmail from "./screens/VerifyEmail";
import ResetPassword from "./screens/ResetPassword";
import TabNavigator from "./navigators/TabNavigator";
import NotificationsScreen from "./screens/NotificationsScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="" />,
          })}
        />
        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="" />,
          })}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={({ navigation }) => ({
            header: () => <CustomHeader navigation={navigation} title="" />,
          })}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
