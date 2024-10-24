import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { styles } from "./profile";

const Page = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.text}>Transactions</Text>
      </View>
    </>
  );
};

export default Page;
