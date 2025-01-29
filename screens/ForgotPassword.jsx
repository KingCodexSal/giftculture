import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Please enter your email address to {"\n"} receive a 4-digit code
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="hello@example.com" />
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate("VerifyEmail")}
      >
        <Text style={styles.forgotPasswordText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderRadius: 10,
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
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    alignItems: "center",
    textAlign: "left",
    marginTop: 15,
  },
  forgotPasswordButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ForgotPassword;
