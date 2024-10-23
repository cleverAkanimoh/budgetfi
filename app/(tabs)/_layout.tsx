import { Tabs } from "expo-router";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                padding: 12,
                borderRadius: 30,
                backgroundColor: focused ? Colors.tintColor : Colors.grey,
              }}
            >
              <SimpleLineIcons name="pie-chart" size={18} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
