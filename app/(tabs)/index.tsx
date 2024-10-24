import { View, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
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
