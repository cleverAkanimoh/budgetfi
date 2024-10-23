import { Tabs } from "expo-router";
import React from "react";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Tabs>
      <TabsNavigation
        name="index"
        NavigationIcon={SimpleLineIcons}
        iconName="pie-chart"
      />
      <TabsNavigation
        name="transactions"
        NavigationIcon={AntDesign}
        iconName="swap"
      />
      <TabsNavigation
        name="profile"
        NavigationIcon={FontAwesome}
        iconName="user-0"
      />
    </Tabs>
  );
};

export default Layout;

const TabsNavigation = ({
  name,
  NavigationIcon,
  iconName,
}: {
  name: string;
  iconName: string;
  NavigationIcon: React.ElementType;
}) => (
  <Tabs.Screen
    name={name}
    options={{
      tabBarIcon: ({ color, size, focused }) => (
        <View
          style={{
            padding: 12,
            borderRadius: 30,
            backgroundColor: focused ? Colors.tintColor : Colors.grey,
          }}
        >
          <NavigationIcon name={iconName} size={18} color={color} />
        </View>
      ),
    }}
  />
);
