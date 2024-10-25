import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";

const ExpensesBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item }) => {
    const amount = item.amount?.split(".");
    const amountPrefix = amount?.[0];
    const amountSuffix = amount?.[1];
    return (
      <View style={[styles.expensesBlock, { backgroundColor: "" }]}>
        <Text style={[styles.text, { fontSize: 12 }]}>{item.name}</Text>
        <Text style={[styles.text, { fontSize: 16, fontWeight: "600" }]}>
          ${amountPrefix}.
          <Text style={{ fontWeight: "400", fontSize: 12 }}>
            {amountSuffix}
          </Text>
        </Text>
        <View style={styles.expensePercentage}>
          <Text style={[styles.text, { fontSize: 12 }]}>
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={expenseList}
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
    marginRight: 10,
    gap: 8,
    // width: 100,
    minWidth: 100,
    padding: 15,
    borderRadius: 15,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  text: { color: Colors.white },
  expensePercentage: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
});
