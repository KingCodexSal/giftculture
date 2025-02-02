import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const sharedGiftsData = [
  {
    title: "Travel Bag",
    rating: 4.0,
    price: "₦ 10000",
    image: require("../assets/sharedgifts1.png"),
  },
  {
    title: "Wireless Earpods",
    rating: 4.0,
    price: "₦ 10000",
    image: require("../assets/sharedgifts2.png"),
  },
  {
    title: "Chocolate Box",
    rating: 4.0,
    price: "₦ 10000",
    image: require("../assets/sharedgifts3.png"),
  },
  {
    title: "Bluetooth Speaker",
    rating: 4.0,
    price: "₦ 10000",
    image: require("../assets/sharedgifts4.png"),
  },
];

const SharedGifts = ({ navigation }) => {
  const renderGiftItem = ({ item }) => (
    <View style={styles.giftCard}>
      <Image source={item.image} style={styles.giftImage} />
      <Text style={styles.giftTitle}>{item.title}</Text>
      <Text style={styles.giftRating}>⭐ {item.rating}</Text>
      <Text style={styles.giftPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.giftButton}>
        <Text style={styles.giftButtonText}>Gift Anonymously</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/profile.png")}
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Shared Gifts</Text>
        </View>
        <Icon
          name="notifications-outline"
          size={24}
          color="#4A4A4A"
          onPress={() => navigation.navigate("NotificationsScreen")}
        />
      </View>
      <View style={styles.searchBarWrapper}>
        <Icon
          name="search-outline"
          size={20}
          color="#7E7E7E"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search gift lists" style={styles.input} />
      </View>
      <FlatList
        data={sharedGiftsData}
        renderItem={renderGiftItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
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
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  searchBarWrapper: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    margin: 16,
  },
  input: { flex: 1, fontSize: 16, paddingVertical: 13, color: "#333" },
  searchIcon: { marginRight: 8 },
  listContainer: {
    paddingBottom: 80,
  },
  giftCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    padding: 16,
    alignItems: "center",
    width: width * 0.45,
  },
  giftImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  giftTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  giftRating: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  giftPrice: {
    fontSize: 14,
    color: "#FF1953",
    marginBottom: 8,
  },
  giftButton: {
    backgroundColor: "#FF1953",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  giftButtonText: {
    color: "#fff",
    fontWeight: "bold",
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

export default SharedGifts;
