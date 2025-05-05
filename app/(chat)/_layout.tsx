import { Link, Stack } from "expo-router";
import { IconSymbol } from "@/components/IconSymbol";
import { Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function RootChatLayout() {
  const { user } = useUser();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          title: " Chat Rooms",
          headerLeft: () => (
            <Link href="/profile">
              <Image
                source={{ uri: user?.imageUrl }}
                style={{ width: 32, height: 32, borderRadius: 16 }}
              />
            </Link>
          ),
          headerRight: () => (
            <Link href="/new-room">
              <IconSymbol name="plus" />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="new-room"
        options={{
          presentation: "modal",
          headerTitle: "New Chat Room",
          headerLeft: () => (
            <Link href="/" dismissTo>
              <IconSymbol name="chevron.left" />
            </Link>
          ),
        }}
      />
      <Stack.Screen name="profile" options={{ presentation: "modal" }} />

      <Stack.Screen name="[chat]" options={{ headerTitle: "" }} />
      <Stack.Screen
        name="settings/[chat]"
        options={{ presentation: "modal", headerTitle: "Room Settings" }}
      />
    </Stack>
  );
}
