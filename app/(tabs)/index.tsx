import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";

const HomePage = () => {
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.emphasisText}>
            My <Text style={{ fontWeight: "700" }}>Expenses</Text>
          </Text>
        </ScrollView>
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
  emphasisText: { color: Colors.white, fontSize: 16 },
});
