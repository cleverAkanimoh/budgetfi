import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import { AirbnbIcon, FigmaIcon, NetflixIcon } from "@/constants/icons";

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  return (
    <View style={{ marginVertical: 20, gap: 20, alignItems: "flex-start" }}>
      <Text style={styles.emphasisText}>
        July <Text style={{ fontWeight: "700" }}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        return (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
            key={item.id}
          >
            <IconsBasedOnName name={item.name} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
                flex: 1,
              }}
            >
              <View style={{ gap: 5 }}>
                <Text
                  style={[styles.text, { fontSize: 16, fontWeight: "700" }]}
                >
                  {item.name}
                </Text>

                <Text
                  style={[styles.text, { fontWeight: "400", fontSize: 12 }]}
                >
                  {item.date}
                </Text>
              </View>

              <Text style={styles.text}>${item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const IconsBasedOnName = ({ name }: { name: string }) => {
  switch (name) {
    case "Netflix":
      return <SvgIcon Icon={NetflixIcon} />;
    case "Freelancing":
      return <SvgIcon Icon={FigmaIcon} />;

    default:
      return <SvgIcon Icon={AirbnbIcon} />;
  }
};

const SvgIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <View
    style={{
      backgroundColor: Colors.grey,
      borderRadius: 50,
      padding: 10,
    }}
  >
    <Icon width={22} height={22} color={Colors.white} />
  </View>
);

export default SpendingBlock;

const styles = StyleSheet.create({
  emphasisText: { color: Colors.white, fontSize: 16 },
  text: { color: Colors.white },
});
