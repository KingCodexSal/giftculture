import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ResetPassword = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleResetPassword = () => {
    // Logic to handle password reset can be added here.
    // For now, let's navigate to a success screen or any other flow.
    navigation.navigate("Success");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Enter a new password for your account {"\n"} so you can login and access
        the app.
      </Text>

      <Text style={styles.label}>Create New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Confirm New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.resetPasswordButton}>
        <Text style={styles.resetPasswordText}>Save</Text>
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
    textAlign: "left",
  },
  resetPasswordButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    paddingHorizontal: 100,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  resetPasswordText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    alignSelf: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#FF1953",
  },
});

export default ResetPassword;
