import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("NotificationsScreen")}
        >
          <Icon name="notifications-outline" size={24} color="#4A4A4A" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={require("../assets/profile.png")} // Replace with your profile image path
          style={styles.profileImage}
        />
        <Text style={styles.email}>johndoe22@gmail.com</Text>
        <Text style={styles.address}>123 Elm Street, Apt 4B</Text>
        <Text style={styles.phone}>08076749912</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="person-outline" size={20} color="#333" />
          <Text style={styles.optionText}>Edit Profile Information</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option}>
          <Icon name="location-outline" size={20} color="#333" />
          <Text style={styles.optionText}>Manage Saved Address</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option}>
          <Icon name="card-outline" size={20} color="#333" />
          <Text style={styles.optionText}>Manage Payment Methods</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option}>
          <Icon name="list-outline" size={20} color="#333" />
          <Text style={styles.optionText}>View Order History</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option}>
          <Icon name="settings-outline" size={20} color="#333" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.logoutOption}>
          <Icon name="log-out-outline" size={20} color="#FF1953" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("CreateGiftListScreen")}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  address: {
    fontSize: 14,
    color: "#777",
  },
  phone: {
    fontSize: 14,
    color: "#777",
  },
  optionsContainer: {
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
  },
  logoutOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "#FF1953",
    marginLeft: 10,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#FF1953",
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ProfileScreen;
