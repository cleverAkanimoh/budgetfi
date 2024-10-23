import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NetflixIcon } from "@/constants/icons";
import Colors from "@/constants/Colors";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
