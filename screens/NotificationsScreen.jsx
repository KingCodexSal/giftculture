import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const notifications = [
  {
    id: "1",
    message: "John just sent you a Smart Watch with a special message.",
    time: "Last Wednesday at 9:42 AM",
  },
  {
    id: "2",
    message: "Your Coffee Maker is on its way. Estimated arrival: 3:00 PM.",
    time: "Wednesday at 9:42 AM",
  },
  {
    id: "3",
    message: "Your gift order is placed and being processed.",
    time: "Last Monday at 9:42 AM",
  },
  {
    id: "4",
    message: "We're carefully preparing your gift for delivery. Stay tuned.",
    time: "Last Wednesday at 9:42 AM",
  },
  {
    id: "5",
    message: "Your gift has been delivered successfully.",
    time: "Last Wednesday at 9:42 AM",
  },
  {
    id: "6",
    message: "Your gift to Jane, 'Wireless Earbuds,' was delivered.",
    time: "Last Wednesday at 9:42 AM",
  },
];

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image
        source={require("../assets/profile.png")}
        style={styles.profileImage}
      />
      <View style={styles.notificationText}>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
  },
  notificationText: {
    marginLeft: 10,
    flex: 1,
  },
  message: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
    lineHeight: 22,
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default NotificationsScreen;
