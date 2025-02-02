import React, { useRef } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ProgressBar from "react-native-progress/Bar";

// Import local images
import giftImage1 from "../assets/card1.png";
import giftImage2 from "../assets/card1.png";
import giftImage3 from "../assets/card1.png";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const mainCarouselRef = useRef(null);

  const mainCarouselData = [
    {
      title: "Gifts of Love",
      description: "Find thoughtful gifts that make every moment special.",
      image: require("../assets/carousel1.png"),
    },
    {
      title: "Holiday Cheer",
      description: "Bring smiles this season with perfect holiday gifts.",
      image: require("../assets/carousel2.png"),
    },
  ];

  const smallCardsData = [
    {
      title: "Mom's Birthday",
      items: "3 of 5 items added",
      updated: "1 day ago",
    },
    {
      title: "Holiday Wishlist",
      items: "8 of 10 items added",
      updated: "10 minutes ago",
    },
    {
      title: "Anniversary",
      items: "5 of 10 items added",
      updated: "2 days ago",
    },
  ];

  const latestGiftsData = [
    {
      from: "Jane",
      description: "Birthday gift",
      received: "Jan 5, 2025",
      image: giftImage1,
    },
    {
      from: "John",
      description: "Christmas gift",
      received: "Dec 25, 2024",
      image: giftImage2,
    },
    {
      from: "Doe",
      description: "New Year gift",
      received: "Jan 1, 2025",
      image: giftImage3,
    },
  ];

  const colors = ["#C8E6C9", "#FFCDD2", "#BBDEFB"];

  const renderSmallCardItem = ({ item, index }) => {
    const progress = Math.random() * (0.45 - 0.3) + 0.3; // Random progress between 30% and 45%
    return (
      <View
        style={[
          styles.listCard,
          { backgroundColor: colors[index % colors.length] },
        ]}
      >
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listSubText}>{item.items}</Text>
        <ProgressBar
          progress={progress}
          width={null}
          color="#FF1953"
          style={styles.progressBar}
        />
        <Text style={styles.listSubText}>Last Updated: {item.updated}</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit List</Text>
          <Icon name="arrow-forward" size={16} color="#FF1953" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderLatestGiftItem = ({ item }) => (
    <View style={styles.latestGift}>
      <Image source={item.image} style={styles.giftImageSmall} />
      <View>
        <Text style={styles.giftFrom}>Gift from {item.from}</Text>
        <Text style={styles.giftDescription}>
          Description: {item.description}
        </Text>
        <Text>Received on: {item.received}</Text>
      </View>
    </View>
  );

  const renderMainCarouselItem = ({ item }) => (
    <View style={styles.carouselCard}>
      <View style={styles.carouselContent}>
        <View style={styles.carouselText}>
          <Text style={styles.giftTitle}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.giftDescription}>
            {item.description}
          </Text>
          <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Create Your List</Text>
          </TouchableOpacity>
        </View>
        <Image source={item.image} style={styles.giftImage} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profileImage}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>Welcome, Gifter</Text>
            <Text style={styles.subText}>
              Your recent activity at a glance.
            </Text>
          </View>
          <Icon name="notifications-outline" size={24} color="#4A4A4A" />
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
          data={mainCarouselData}
          renderItem={renderMainCarouselItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
        <Text style={styles.sectionTitle}>Active Gift Lists</Text>
        <FlatList
          data={smallCardsData}
          renderItem={renderSmallCardItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
        <Text style={styles.sectionTitle}>Your Latest Gifts</Text>
        <FlatList
          data={latestGiftsData}
          renderItem={renderLatestGiftItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8, paddingBottom: 20 }}
        />
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
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
  welcomeText: { fontSize: 22, fontWeight: "600", color: "#333" },
  subText: { color: "#333", fontSize: 14 },
  searchBarWrapper: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  input: { flex: 1, fontSize: 16, paddingVertical: 13, color: "#333" },
  searchIcon: { marginRight: 8 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#4A4A4A",
  },
  carouselCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    width: width * 0.9,
    height: 160,
    alignSelf: "center",
    overflow: "hidden",
    marginRight: 12,
  },
  carouselContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  carouselText: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: "center",
    maxWidth: width * 0.6,
  },
  giftTitle: { fontSize: 22, fontWeight: "bold", color: "#333" },
  giftDescription: { color: "#333", marginVertical: 8, fontSize: 16 },
  buttonWrapper: {
    marginTop: 8,
    backgroundColor: "#FF1953",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignItems: "center",
    maxWidth: 140,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  giftImage: {
    width: width * 0.4,
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 20,
  },
  listCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginRight: 12,
    width: width * 0.5,
  },
  listTitle: { fontSize: 14, fontWeight: "600", color: "#333" },
  listSubText: { color: "#333", fontSize: 12, marginTop: 4 },
  progressBar: {
    marginTop: 10,
    marginBottom: 10,
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  editButtonText: {
    color: "#FF1953",
    fontWeight: "bold",
    marginRight: 5,
  },
  latestGift: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginTop: 12,
  },
  giftImageSmall: { width: 60, height: 60, borderRadius: 8, marginRight: 16 },
  giftFrom: { fontSize: 16, fontWeight: "600", color: "#333" },
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

export default HomeScreen;
