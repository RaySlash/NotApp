import React from "react";
import { ScrollView, View } from "react-native";
import { Input } from "@components/ui/input";
import { Text } from "@components/ui/text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Search } from "@lib/icons/Search";
import { Button } from "~/components/ui/button";
import { useColorScheme } from "~/lib/useColorScheme";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <SearchBar />
      <ScrollView>
        <TagBar />
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
    </View>
  );
};

function SearchBar() {
  const colorScheme = useColorScheme();

  return (
    <View className="flex-row mb-4 justify-between items-center">
      <Input
        placeholder="Search"
        className="flex-1 ml-4 rounded-full shadow-xl"
      />
      <Button variant={"ghost"}>
        <Text>
          <Search
            size={24}
            color={colorScheme.isDarkColorScheme ? "white" : "black"}
          />
        </Text>
      </Button>
    </View>
  );
}

function TagBar() {
  return (
    <ScrollView
      className="flex-1 gap-2"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Button variant={"link"}>
        <Text>#help</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#budget</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#work</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#personal</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#help</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#help</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#help</Text>
      </Button>
      <Button variant={"link"}>
        <Text>#help</Text>
      </Button>
    </ScrollView>
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

export default HomeScreen;
