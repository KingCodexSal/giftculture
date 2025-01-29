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
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const mainCarouselRef = useRef(null);

  const mainCarouselData = [
    {
      title: "Gifts of Love",
      description: "Find thoughtful gifts that make every moment special.",
      image: require("../assets/splash.png"),
    },
    {
      title: "Holiday Cheer",
      description: "Bring smiles this season with perfect holiday gifts.",
      image: "https://via.placeholder.com/300",
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

  const renderMainCarouselItem = ({ item }) => (
    <View style={styles.carouselCardFullWidth}>
      <View style={styles.carouselContentLeft}>
        <Text style={styles.giftTitle}>{item.title}</Text>
        <Text style={styles.giftDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Create Your List</Text>
        </TouchableOpacity>
      </View>
      <Image source={item.image} style={styles.giftImageFullWidth} />
    </View>
  );

  const renderSmallCardItem = ({ item }) => (
    <View style={styles.listCard}>
      <Text style={styles.listTitle}>{item.title}</Text>
      <Text style={styles.listSubText}>{item.items}</Text>
      <Text style={styles.listSubText}>Last Updated: {item.updated}</Text>
    </View>
  );

  const handleSnap = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    mainCarouselRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Welcome, Gifter</Text>
          <Text style={styles.subText}>Your recent activity at a glance.</Text>
        </View>
        <Icon name="notifications-outline" size={24} color="#4A4A4A" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarWrapper}>
        <Icon
          name="search-outline"
          size={20}
          color="#7E7E7E"
          style={styles.searchIcon}
        />
        <TextInput placeholder="Search gift lists" style={styles.input} />
      </View>

      {/* Main Carousel */}
      <FlatList
        ref={mainCarouselRef}
        data={mainCarouselData}
        renderItem={renderMainCarouselItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={width}
        decelerationRate="fast"
        onScrollEndDrag={handleSnap}
        contentContainerStyle={{ paddingVertical: 8, alignItems: "center" }} // Fix: Added correct syntax for center alignment
        pagingEnabled
      />

      {/* Active Gift Lists */}
      <Text style={styles.sectionTitle}>Active Gift Lists</Text>
      <FlatList
        data={smallCardsData}
        renderItem={renderSmallCardItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}
      />

      {/* Latest Gifts */}
      <Text style={styles.sectionTitle}>Your Latest Gifts</Text>
      <View style={styles.latestGift}>
        <Image
          source={{ uri: "https://via.placeholder.com/80" }}
          style={styles.giftImageSmall}
        />
        <View>
          <Text style={styles.giftFrom}>Gift from Jane</Text>
          <Text style={styles.giftDescription}>Description: Birthday gift</Text>
          <Text>Received on: Jan 5, 2025</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  welcomeText: { fontSize: 22, fontWeight: "600", color: "#333" },
  subText: { color: "#777", fontSize: 14 },
  searchBarWrapper: {
    flexDirection: "row",
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  input: { flex: 1, fontSize: 16, paddingVertical: 13, color: "#333" },
  searchIcon: { marginRight: 8 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#4A4A4A",
  },
  carouselCardFullWidth: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: width * 0.9,
    alignSelf: "center",
  },
  carouselContentLeft: { flex: 1, justifyContent: "center", paddingRight: 8 },
  giftTitle: { fontSize: 20, fontWeight: "600", color: "#333" },
  giftDescription: { color: "#777", marginVertical: 8, fontSize: 14 },
  buttonWrapper: {
    marginTop: 12,
    backgroundColor: "#ff5c5c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 14 },
  giftImageFullWidth: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 12,
  },
  listCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    width: width * 0.4,
  },
  listTitle: { fontSize: 14, fontWeight: "600", color: "#333" },
  listSubText: { color: "#777", fontSize: 12, marginTop: 4 },
  latestGift: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginTop: 12,
  },
  giftImageSmall: { width: 60, height: 60, borderRadius: 8, marginRight: 16 },
  giftFrom: { fontSize: 16, fontWeight: "600", color: "#333" },
});

export default HomeScreen;
