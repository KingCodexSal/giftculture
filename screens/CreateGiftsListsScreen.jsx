import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CreateGiftListScreen = ({ navigation }) => {
  const [listTitle, setListTitle] = useState("");
  const [occasion, setOccasion] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationsScreen")}
        >
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTitle}>Create Gift List</Text>
      <Text style={styles.subtitle}>
        Organize your gift ideas with a custom list.
      </Text>

      <Text style={styles.label}>List Title</Text>
      <TextInput
        style={styles.input}
        placeholder="List Title"
        value={listTitle}
        onChangeText={setListTitle}
      />

      <Text style={styles.label}>Occasion</Text>
      <TextInput
        style={styles.input}
        placeholder="Occasion"
        value={occasion}
        onChangeText={setOccasion}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.catalogButton}>
        <Text style={styles.catalogText}>Add from Catalog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
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
    marginTop: 15,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  textArea: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    height: 100,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  createButton: {
    backgroundColor: "#FF1953",
    borderRadius: 25,
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  createText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  catalogButton: {
    marginTop: 10,
    alignItems: "center",
  },
  catalogText: {
    color: "#FF4B2B",
    fontWeight: "bold",
  },
});

export default CreateGiftListScreen;
