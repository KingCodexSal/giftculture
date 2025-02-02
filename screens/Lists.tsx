import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Lists: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Page</Text>
      <Text style={styles.content}>This is a random page content.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Lists;
