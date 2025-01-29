import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to GiftCulture</Text>
      <Text style={styles.subtitle}>
        Create gift lists and send anonymous {"\n"} surprises that brighten
        anyone's day.
      </Text>

      <Image
        source={require("../assets/onboarding.jpg")}
        style={styles.image}
      />

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text style={styles.createAccountText}>Create an Account</Text>
      </TouchableOpacity>

      <Text style={styles.login}>
        Have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: "15%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    marginBottom: 30,
  },
  createAccountButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  createAccountText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  login: {
    fontSize: 14,
    color: "#555",
  },
  loginLink: {
    color: "#FF4B2B",
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
