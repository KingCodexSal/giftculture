import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SignUpScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join GiftCulture</Text>
      <Text style={styles.subtitle}>
        Start sharing the magic of gifting today
      </Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email"
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Phone Number" />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.terms}>
        By Continuing, you agree to GiftCulture's{" "}
        <Text style={styles.termsLink}>Terms & Conditions</Text>
      </Text>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.hrt}>
        <View style={styles.line}></View>
        <Text style={styles.text}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Image
            source={require("../assets/google.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Image source={require("../assets/apple.png")} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Image source={require("../assets/fb.png")} style={styles.image} />
        </TouchableOpacity>
      </View>

      <View style={styles.flexSpacer} />

      <View style={styles.centerText}>
        <Text style={styles.login}>
          Already have an account?{" "}
          <Text
            style={styles.loginLink}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    marginTop: 15,
  },
  input: {
    backgroundColor: "#f5f5f5",
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    height: 50,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    height: "100%",
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
    marginBottom: 25,
  },
  signupButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  terms: {
    fontSize: 14,
    color: "#555",
    marginVertical: 10,
  },
  termsLink: {
    color: "#FF4B2B",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  button: {
    flex: 1,
    padding: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  hrt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    flex: 1,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  login: {
    fontSize: 14,
    color: "#555",
  },
  loginLink: {
    color: "#FF4B2B",
    fontWeight: "bold",
  },
  centerText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  flexSpacer: {
    flex: 1,
  },
});

export default SignUpScreen;
