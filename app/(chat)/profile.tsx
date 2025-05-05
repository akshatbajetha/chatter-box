import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "@/components/Text";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function Profile() {
  const { signOut } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/(auth)");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", gap: 16, padding: 16 }}>
      <Image
        source={{ uri: user?.imageUrl }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {user?.fullName}
        </Text>
        <Text style={{ fontSize: 16, color: "gray" }}>
          {user?.emailAddresses[0].emailAddress}
        </Text>
      </View>
      <Button onPress={handleSignOut}>Sign Out</Button>
    </View>
  );
}
