import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const WalletScreen = ({ navigation }) => {
  const transactions = [
    {
      type: "Top-up",
      status: "Completed",
      amount: "+₦500",
      time: "1 hour ago",
    },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Icon name="arrow-up-circle-outline" size={24} color="#4A4A4A" />
      <View style={styles.transactionText}>
        <Text style={styles.transactionType}>{item.type}</Text>
        <Text style={styles.transactionStatus}>{item.status}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.time}>{item.time}</Text>
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
        <Text style={styles.headerTitle}>My Wallet</Text>
        <Icon
          name="notifications-outline"
          size={24}
          color="#4A4A4A"
          onPress={() => navigation.navigate("NotificationsScreen")}
        />
      </View>
      <Text style={styles.balanceLabel}>Available Balance</Text>
      <Text style={styles.balance}>₦ 10000</Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.iconContainer}>
            <Icon name="arrow-up-outline" size={20} color="#FF1953" />
          </View>
          <Text style={styles.tabText}>Top-up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.iconContainer}>
            <Icon name="receipt-outline" size={20} color="#FF1953" />
          </View>
          <Text style={styles.tabText}>Transactions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.iconContainer}>
            <Icon name="refresh-outline" size={20} color="#FF1953" />
          </View>
          <Text style={styles.tabText}>Refunds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <View style={styles.iconContainer}>
            <Icon name="gift-outline" size={20} color="#FF1953" />
          </View>
          <Text style={styles.tabText}>Rewards</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.recentTransactions}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item, index) => index.toString()}
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
    padding: 16,
    paddingTop: 40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  balanceLabel: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
    marginTop: 20,
  },
  balance: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#FF1953",
    marginVertical: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFE4E1",
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 50,
    paddingVertical: 10,
    marginBottom: 20,
  },
  tab: {
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  tabText: {
    color: "#FF1953",
    fontSize: 12,
    marginTop: 4,
  },
  recentTransactions: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    margin: 16,
    marginBottom: 8,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
  transactionText: {
    flex: 1,
    marginLeft: 10,
  },
  transactionType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  transactionStatus: {
    fontSize: 14,
    color: "#777",
  },
  transactionAmount: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  time: {
    fontSize: 12,
    color: "#777",
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

export default WalletScreen;
