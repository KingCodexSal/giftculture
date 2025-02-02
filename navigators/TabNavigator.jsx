import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "../screens/HomeScreen";
import Lists from "../screens/Lists";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "gray",
        tabBarPosition: "bottom",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-heart"
              color={color}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Lists"
        component={Lists}
        options={{
          tabBarLabel: "Lists",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
