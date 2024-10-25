import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250?u=12" }}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.text}>Hi, Ndifreke</Text>
            <Text style={styles.emphasisText}>
              Your <Text style={{ fontWeight: "700" }}>Budget</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: { flexDirection: "row", alignItems: "center", gap: 10 },
  userImage: { height: 40, width: 40, borderRadius: 30 },
  button: {
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
  },
  text: { color: Colors.white, fontSize: 12, fontWeight: "400" },
  emphasisText: { color: Colors.white, fontSize: 16 },
});
