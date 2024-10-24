import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { PieChart } from "react-native-gifted-charts";

const HomePage = () => {
  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    {
      value: 3,
      color: "#FFA5BA",
      gradientCenterColor: "#ff7f97",
      text: "3%",
    },
  ];
  return (
    <>
      <Stack.Screen options={{ header: () => <Header /> }} />
      <View style={[styles.container, { paddingTop: 60 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={styles.emphasisText}>
                My <Text style={{ fontWeight: "700" }}>Expenses</Text>
              </Text>
              <Text
                style={{ fontWeight: "700", fontSize: 32, color: Colors.white }}
              >
                $1475.
                <Text style={{ fontWeight: "400", fontSize: 22 }}>00</Text>
              </Text>
            </View>
            <View>
              <PieChart
                data={pieData}
                donut
                showGradient
                semiCircle
                sectionAutoFocus
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => (
                  <View
                    style={{ justifyContent: "center", alignContent: "center" }}
                  >
                    <Text
                      style={{
                        fontSize: 22,
                        color: Colors.white,
                        fontWeight: "bold",
                      }}
                    >
                      47%
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Colors.white,
                      }}
                    >
                      Excellent
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
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
