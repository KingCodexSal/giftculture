import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const TrackOrderScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
          >
            <Image
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>Track My Order</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NotificationsScreen")}
          >
            <Icon name="notifications-outline" size={24} color="#4A4A4A" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBarWrapper}>
          <Icon
            name="search-outline"
            size={20}
            color="#7E7E7E"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search for order" style={styles.input} />
        </View>

        <View style={[styles.orderStatus, styles.cardSuccess]}>
          <View style={styles.statusIcon}>
            <Icon name="checkmark-circle" size={60} color="green" />
          </View>
          <View style={styles.statusText}>
            <Text style={styles.statusMessage}>
              Your order has been placed successfully.
            </Text>
            <Text style={styles.statusTime}>Jan 10, 2025, 3:30 PM</Text>
          </View>
        </View>
        <Icon
          name="arrow-down"
          size={24}
          color="#4A4A4A"
          style={styles.arrowIcon}
        />
        <View style={[styles.orderStatus, styles.cardPacking]}>
          <View style={styles.statusIcon}>
            <Text style={styles.emoji}>📦</Text>
          </View>
          <View style={styles.statusText}>
            <Text style={styles.statusMessage}>
              Your items are being packed.
            </Text>
            <Text style={styles.statusTime}>
              Expected to finish by Jan 11, 2025, 10:00 AM.
            </Text>
          </View>
        </View>
        <Icon
          name="arrow-down"
          size={24}
          color="#4A4A4A"
          style={styles.arrowIcon}
        />
        <View style={[styles.orderStatus, styles.cardDelivery]}>
          <View style={styles.statusIcon}>
            <Text style={styles.emoji}>🚚</Text>
          </View>
          <View style={styles.statusText}>
            <Text style={styles.statusMessage}>Out for delivery.</Text>
            <Text style={styles.statusTime}>
              Expected delivery by Jan 12, 2025, 3:00 PM.
            </Text>
          </View>
        </View>
        <Icon
          name="arrow-down"
          size={24}
          color="#4A4A4A"
          style={styles.arrowIcon}
        />
        <View style={[styles.orderStatus, styles.cardInfo]}>
          <View style={styles.infoIcon}>
            <Text style={styles.emoji}>📦</Text>
          </View>
          <View style={styles.infoText}>
            <Text style={styles.infoMessage}>
              Delivered to 123 Elm Street, Apt 4B
            </Text>
            <Text style={styles.infoTime}>Jan 12, 2025, 3:15 PM</Text>
          </View>
        </View>
      </ScrollView>

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
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  headerTextContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  subText: {
    color: "#333",
    fontSize: 14,
  },
  searchBarWrapper: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 13,
    color: "#333",
  },
  searchIcon: {
    marginRight: 8,
  },
  orderStatus: {
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 8,
    alignItems: "center",
  },
  statusIcon: {
    backgroundColor: "transparent",
    marginBottom: 8,
  },
  statusText: {
    alignItems: "center",
  },
  statusMessage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  statusTime: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
  arrowIcon: {
    alignSelf: "center",
    marginVertical: 8,
  },
  cardSuccess: {
    backgroundColor: "#e0f2f1",
    borderWidth: 1,
    borderColor: "#b2dfdb",
  },
  cardPacking: {
    backgroundColor: "#fff9c4",
  },
  cardDelivery: {
    backgroundColor: "#ffccbc",
  },
  cardInfo: {
    backgroundColor: "#bbdefb",
  },
  infoIcon: {
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
  },
  infoText: {
    alignItems: "center",
  },
  infoMessage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  infoTime: {
    fontSize: 12,
    color: "#777",
    textAlign: "center",
  },
  emoji: {
    fontSize: 60,
    marginBottom: 8,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FF1953",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default TrackOrderScreen;
