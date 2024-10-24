import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const Header = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.black }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 70,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/250?u=12" }}
          style={{ height: 50, width: 50, borderRadius: 30 }}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{ borderColor: Colors.white, borderRadius: 20, padding: 5 }}
        >
          <Text>My Transactions</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
