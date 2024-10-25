import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import {
  DollarIcon,
  DollarSignIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
} from "@/constants/icons";
import { Feather } from "@expo/vector-icons";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    const amount = item.amount?.split(".");
    const amountPrefix = amount?.[0];
    const amountSuffix = amount?.[1];
    return (
      <View style={styles.incomeBlock}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <IconsBasedOnName name={item.name} />
          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" color={Colors.white} size={20} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text, { fontSize: 12 }]}>{item.name}</Text>
        <Text style={[styles.text, { fontSize: 16, fontWeight: "700" }]}>
          ${amountPrefix}.
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            {amountSuffix}
          </Text>
        </Text>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 20, gap: 20 }}>
      <Text style={styles.emphasisText}>
        My <Text style={{ fontWeight: "700" }}>Income</Text>
      </Text>

      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const IconsBasedOnName = ({ name }: { name: string }) => {
  switch (name) {
    case "Interest":
      return <SvgIcon Icon={WalletAddMoneyIcon} />;
    case "Freelancing":
      return <SvgIcon Icon={WalletCardIcon} />;

    default:
      return <SvgIcon Icon={DollarIcon} />;
  }
};

const SvgIcon = ({ Icon }: { Icon: React.ElementType }) => (
  <View
    style={{
      borderColor: "#666",
      borderWidth: 1,
      borderRadius: 50,
      padding: 5,
      alignSelf: "flex-start",
    }}
  >
    <Icon width={22} height={22} color={Colors.white} />
  </View>
);

const styles = StyleSheet.create({
  emphasisText: { color: Colors.white, fontSize: 16 },
  incomeBlock: {
    backgroundColor: Colors.grey,
    marginRight: 15,
    width: 150,
    padding: 20,
    borderRadius: 20,
    gap: 10,
  },
  text: { color: Colors.white },
});
