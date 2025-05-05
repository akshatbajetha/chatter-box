import * as React from "react";
import { View, Switch, Button } from "react-native";
import Input from "@/components/Input";
import { useState } from "react";
import { Text } from "@/components/Text";
import { Stack, router } from "expo-router";
import { Secondary } from "@/colors";
import { appwriteConfig, database } from "@/utils/appwrite";
import { ID } from "react-native-appwrite";

export default function NewRoom() {
  const [roomName, setRoomName] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function createRoom() {
    try {
      setIsLoading(true);
      const room = await database.createDocument(
        appwriteConfig.db,
        appwriteConfig.col.chatRooms,
        ID.unique(),
        {
          title: roomName,
          description: roomDescription,
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      router.back();
    }
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Button
              title={isLoading ? "Creating..." : "Create"}
              onPress={createRoom}
              disabled={roomName.length === 0 || isLoading}
            />
          ),
        }}
      />
      <View style={{ padding: 16, gap: 16 }}>
        <Input
          placeholder="Room Name"
          value={roomName}
          onChangeText={setRoomName}
        />
        <Input
          placeholder="Room Description"
          value={roomDescription}
          onChangeText={setRoomDescription}
          multiline
          numberOfLines={4}
          maxLength={100}
          style={{ height: 100 }}
        />
      </View>
    </>
  );
}
