import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import HomeScreen from "../screens/HomeScreen";
import Lists from "../screens/Lists";
import SharedGifts from "../screens/SharedGifts";
import WalletScreen from "../screens/WalletScreen";
import TrackOrderScreen from "../screens/TrackOrderScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: (width / state.routes.length) * state.index,
      useNativeDriver: true,
    }).start();
  }, [state.index]);

  return (
    <View style={{ flexDirection: "row", backgroundColor: "#fff", height: 60 }}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: width / state.routes.length,
          height: 4,
          backgroundColor: "#FF1953",
          transform: [{ translateX }],
        }}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? "#FF1953" : "#4A4A4A";

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            activeOpacity={0.7}
          >
            <MaterialCommunityIcons
              name={options.tabBarIconName}
              color={color}
              size={24}
            />
            <Text style={{ color, fontSize: 12, fontWeight: "bold" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIconName: "home-heart",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Lists"
        component={Lists}
        options={{
          tabBarLabel: "Lists",
          tabBarIconName: "book",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Gifts"
        component={SharedGifts}
        options={{
          tabBarLabel: "Gifts",
          tabBarIconName: "gift",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarLabel: "Wallet",
          tabBarIconName: "wallet",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Delivery"
        component={TrackOrderScreen}
        options={{
          tabBarLabel: "Delivery",
          tabBarIconName: "truck",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
