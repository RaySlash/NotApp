import { useState } from "react";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, ScrollView } from "react-native";
import { Input } from "~/components/ui/input";
import { Text } from "@components/ui/text";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Plus } from "@lib/icons/Plus";
import { useColorScheme } from "@lib/useColorScheme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

function TabAddScreen() {
  const insets = useSafeAreaInsets();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTextChange = (text: string) => {
    setTitle(text);
  };

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SaveBar />
      <ActionsBar />
      <ScrollView
        className="flex-col m-2"
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
          className="mx-2 mt-2 w-full min-h-screen"
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
    </View>
  );
}

function ActionsBar() {
  return (
    <View className="p-2 flex-row justify-between items-center">
      <View className="flex-row gap-2">
        <Button variant={"secondary"} size={"sm"}>
          <Text className="font-bold">B</Text>
        </Button>
        <Button variant={"secondary"} size={"sm"}>
          <Text className="italic">I</Text>
        </Button>
        <Button variant={"secondary"} size={"sm"}>
          <Text>_</Text>
        </Button>
      </View>
      <CategoryDropdown />
    </View>
  );
}

function CategoryDropdown() {
  const colorScheme = useColorScheme();
  const categories = [
    "Uncategorised",
    "Personal",
    "Work",
    "Study",
    "Health",
    "Finance",
    "Shopping",
    "Others",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Text>{selectedCategory}</Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 native:w-72">
        <DropdownMenuLabel>Select a category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories.map((category, index) => (
          <DropdownMenuItem
            key={index}
            onPress={() => setSelectedCategory(category)}
          >
            <Text>{category}</Text>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem>
          <Text>
            <Plus
              size={24}
              color={colorScheme.isDarkColorScheme ? "white" : "black"}
            />
          </Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SaveBar() {
  const router = useRouter();

  const handleDiscard = () => {
    router.push("(tabs)");
  };

  return (
    <View className="flex-row justify-between items-center">
      <Button variant={"ghost"} onPress={handleDiscard}>
        <Text>Discard</Text>
      </Button>
      <Button variant={"ghost"} onPress={() => console.log("Hello")}>
        <Text>Save</Text>
      </Button>
    </View>
  );
}

export default TabAddScreen;
