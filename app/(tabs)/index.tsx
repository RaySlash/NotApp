import React from "react";
import { ScrollView, View } from "react-native";
import { Input } from "@components/ui/input";
import { Text } from "@components/ui/text";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search } from "@lib/icons/Search";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

const TabOneScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-col justify-center items-center w-screen">
          <SearchBar />
          <TagBar />
        </View>
        <View className="grid-cols-3 w-screen">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function SearchBar() {
  return (
    <View className="flex-row justify-between items-center">
      <Input
        placeholder="Search"
        className="flex-1 ml-4 rounded-full shadow-xl"
      />
      <Button variant={"ghost"}>
        <Search size={24} color="black" />
      </Button>
    </View>
  );
}

function TagBar() {
  return (
    <View className="p-4 flex-row w-full justify-between items-center">
      <Button variant={"outline"}>
        <Text>#help</Text>
      </Button>
      <Button variant={"outline"}>
        <Text>#budget</Text>
      </Button>
      <Button variant={"outline"}>
        <Text>#work</Text>
      </Button>
      <Button variant={"outline"}>
        <Text>#personal</Text>
      </Button>
    </View>
  );
}

function NoteCard() {
  return (
    <Card className="mx-2 mt-2 shadow-md">
      <CardHeader>
        <CardTitle>Note title</CardTitle>
        <CardDescription>tags: #help, #work</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero in nisl tincidunt, in aliquet ex ultricies. Nullam
          eget nunc nec mi ultrices luctus. Integer nec nulla vel eros fermentum
          suscipit. Sed sit amet nunc nec mi ultrices luctus. Integer
        </Text>
      </CardContent>
    </Card>
  );
}

export default TabOneScreen;
