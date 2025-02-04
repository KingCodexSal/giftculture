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

const listsData = [
  {
    title: "Automatic Coffee Brewer",
    description: "Brew your perfect cup of coffee every morning.",
    image: require("../assets/lists1.png"),
  },
  {
    title: "Cozy Knit Blanket",
    description: "Perfect for winter evenings, soft and stylish.",
    image: require("../assets/lists2.png"),
  },
  {
    title: "Portable Projector",
    description: "Create a theater-like experience anywhere.",
    image: require("../assets/lists3.png"),
  },
  {
    title: "Smart Watch",
    description: "Track your fitness and stay connected on the go.",
    image: require("../assets/lists4.png"),
  },
];

const Lists: React.FC<{ navigation: any }> = ({ navigation }) => {
  const renderListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Image source={item.image} style={styles.listImage} />
      <View style={styles.listTextContainer}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listDescription}>{item.description}</Text>
        <View style={styles.iconContainer}>
          <Icon name="share-social-outline" size={20} color="#333" />
          <Icon
            name="create-outline"
            size={20}
            color="#333"
            style={styles.icon}
          />
          <Icon name="trash-outline" size={20} color="#333" />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Gift Lists</Text>
        <TouchableOpacity style={styles.headerLinkContainer}>
          <Text style={styles.headerLink}>Share all gifts to contacts</Text>
        </TouchableOpacity>
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
        data={listsData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate("CreateGiftListScreen")}
      >
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
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    marginLeft: 8,
  },
  headerLinkContainer: {
    marginLeft: "auto",
  },
  headerLink: {
    color: "#FF1953",
    fontSize: 14,
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
  listItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    alignItems: "center",
  },
  listImage: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  listTextContainer: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  listDescription: {
    fontSize: 14,
    color: "#777",
    marginVertical: 4,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  icon: {
    marginHorizontal: 20,
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

export default Lists;
