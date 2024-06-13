import { View } from "react-native";
import { Text } from "@components/ui/text";
import { Button } from "~/components/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-4">
      <View className="flex gap-y-2 w-full">
        <Button
          variant={"outline"}
          onPress={() => router.push("/note-options")}
        >
          <Text>Note Settings</Text>
        </Button>
        <Button variant={"outline"} onPress={() => router.push("/app-options")}>
          <Text>App Settings</Text>
        </Button>
        <Button
          variant={"outline"}
          onPress={() => router.push("/notification-options")}
        >
          <Text>Notification Settings</Text>
        </Button>
        <Button variant={"outline"} onPress={() => router.push("/about-app")}>
          <Text>About App</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
