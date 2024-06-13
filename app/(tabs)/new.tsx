import { useState } from "react";
import { useRouter } from "expo-router";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "~/components/ui/input";
import { Text } from "@components/ui/text";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

function TabAddScreen() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTextChange = (text: string) => {
    setTitle(text);
  };

  const handleDiscard = () => {
    router.push("(tabs)");
  };

  return (
    <SafeAreaView className="flex-col m-2 justify-center items-center">
      <ActionBar handleDiscard={handleDiscard} />
      <ScrollView
        className="flex-col mt-8 m-2"
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          placeholder="Title"
          className="w-full font-bold"
          value={title}
          onChangeText={handleTextChange}
        />
        <Textarea
          placeholder="Write your note here"
          className="mx-2 mt-2 w-full"
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function ActionBar({ handleDiscard }) {
  return (
    <View className="flex-row justify-between items-center">
      <Button variant={"ghost"} onPress={handleDiscard}>
        <Text>Discard</Text>
      </Button>
      <Button variant={"ghost"}>
        <Text>Save</Text>
      </Button>
    </View>
  );
}

export default TabAddScreen;
