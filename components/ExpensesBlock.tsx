import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

const ExpensesBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addExpenses}>
            <Feather name="plus" size={22} color={"#ccc"} />
          </View>
        </TouchableOpacity>
      );
    }
    const amount = item.amount?.split(".");
    const amountPrefix = amount?.[0];
    const amountSuffix = amount?.[1];
    return (
      <View
        style={[
          styles.expensesBlock,
          {
            backgroundColor:
              item.id === "2"
                ? Colors.blue
                : item.id === "3"
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={[
            {
              fontSize: 12,
              color:
                item.id === "2"
                  ? Colors.black
                  : item.id === "3"
                  ? Colors.black
                  : Colors.white,
            },
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            color:
              item.id === "2"
                ? Colors.black
                : item.id === "3"
                ? Colors.black
                : Colors.white,
          }}
        >
          ${amountPrefix}.
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            {amountSuffix}
          </Text>
        </Text>
        <View style={styles.expensePercentage}>
          <Text
            style={{
              fontSize: 12,
              color:
                item.id === "2"
                  ? Colors.black
                  : item.id === "3"
                  ? Colors.black
                  : Colors.white,
            }}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const _static = [{ name: "Add Item" }];

  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        data={_static.concat(expenseList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ gap: 10 }}
      />
    </View>
  );
};

export default ExpensesBlock;

const styles = StyleSheet.create({
  expensesBlock: {
    backgroundColor: Colors.tintColor,
    marginRight: 15,
    gap: 10,
    // width: 100,
    minWidth: 100,
    padding: 20,
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: { color: Colors.white },
  expensePercentage: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 8,
  },
  addExpenses: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});
