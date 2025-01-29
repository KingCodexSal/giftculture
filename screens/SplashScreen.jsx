import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("OnboardingScreen");
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/splash.png")} style={styles.image} />
      <Text style={styles.text}>GiftCulture</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#febcc2",
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
  },
});

export default SplashScreen;
