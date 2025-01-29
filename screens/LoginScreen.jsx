import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Login to continue</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Email"
      />
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
      <Text
        style={styles.forgotPasswordText}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        Forgot Password?
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.fingerprint} onPress={toggleModalVisibility}>
        Use Fingerprint
      </Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModalVisibility}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.fingerprintText}>
              Touch the Fingerprint sensor to Login
            </Text>
            <Image
              source={require("../assets/fingerprint.png")}
              style={styles.fingerprintImage}
            />
            <TouchableOpacity onPress={toggleModalVisibility}>
              <Text style={styles.closeModalText}>Login with Email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.flexSpacer} />

      <View style={styles.centerText}>
        <Text style={styles.signup}>
          Don't have an account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            Sign Up
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
  loginButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signup: {
    fontSize: 14,
    color: "#555",
  },
  signupLink: {
    color: "#FF1953",
    fontWeight: "bold",
  },
  centerText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#FF1953",
    textAlign: "right",
    marginBottom: 20,
  },
  fingerprint: {
    color: "#FF1953",
    textAlign: "center",
    marginVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  fingerprintImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  closeModalText: {
    color: "#FF1953",
    fontWeight: "bold",
    marginTop: 20,
  },
  flexSpacer: {
    flex: 1,
  },
  fingerprintText: {
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default LoginScreen;
