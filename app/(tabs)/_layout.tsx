import { Tabs } from "expo-router";
import { Info } from "@lib/icons/Info";
import { Sun } from "@lib/icons/Sun";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <Info />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <Sun />,
        }}
      />
    </Tabs>
  );
}
