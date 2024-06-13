import { View } from "react-native";
import { Text } from "@components/ui/text";
import { Button } from "~/components/ui/button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex-1 justify-center items-center p-4"
    >
      <View className="flex gap-y-2 w-full">
        <Button
          variant={"outline"}
          onPress={() => router.push("/notesettings")}
        >
          <Text>Note Settings</Text>
        </Button>
        <Button variant={"outline"} onPress={() => router.push("/app-options")}>
          <Text>App Settings</Text>
        </Button>
        <Button
          variant={"outline"}
          onPress={() => router.push("/notificationsettings")}
        >
          <Text>Notification Settings</Text>
        </Button>
        <Button variant={"outline"} onPress={() => router.push("/about")}>
          <Text>About App</Text>
        </Button>
      </View>
    </View>
  );
};

export default SettingsScreen;
