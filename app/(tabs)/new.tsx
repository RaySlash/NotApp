import React from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "~/components/ui/input";
import { Text } from "@components/ui/text";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";

const TabAddScreen = () => {
  return (
    <SafeAreaView className="flex-col m-2 justify-center items-center">
      <ActionBar />
      <ScrollView>
        <Input placeholder="Title" className="mx-2 font-bold" />
        <Textarea
          placeholder="Write your note here"
          className="mx-2 h-screen"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

function ActionBar() {
  return (
    <View className="flex-row justify-between items-center">
      <Button variant={"ghost"}>
        <Text>Discard</Text>
      </Button>
      <Button variant={"ghost"}>
        <Text>Save</Text>
      </Button>
    </View>
  );
}

export default TabAddScreen;
