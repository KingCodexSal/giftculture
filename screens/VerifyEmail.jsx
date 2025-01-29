import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const VerifyEmail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email?</Text>
      <Text style={styles.subtitle}>
        We sent an email to{" "}
        <Text style={styles.boldSubtitleText}>john.doe@gmail.com</Text>{" "}
      </Text>
      <TextInput style={styles.input} placeholder="123456" />
      <TouchableOpacity
        style={styles.verifyEmailButton}
        onPress={() => navigation.navigate("ResetPassword")}
      >
        <Text style={styles.verifyEmailText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.code}>
        Didnt receive a code?{" "}
        <Text
          style={styles.codeLink}
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          Click to resend
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boldSubtitleText: {
    fontWeight: "bold",
  },
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
  verifyEmailButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  verifyEmailText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  code: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    marginTop: 20,
  },
  codeLink: {
    color: "#FF1953",
    fontWeight: "bold",
  },
});

export default VerifyEmail;
