import { Client, Databases } from "react-native-appwrite";

if (!process.env.EXPO_PUBLIC_APPWRITE_APP_ID) {
  throw new Error("EXPO_PUBLIC_APPWRITE_APP_ID is not set");
}

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_APP_ID,
  platform: "com.akshatbajetha.chatter-box",
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID!,
  col: {
    chatRooms: process.env.EXPO_PUBLIC_APPWRITE_CHATROOMS_COL_ID!,
    message: process.env.EXPO_PUBLIC_APPWRITE_MESSAGE_COL_ID!,
  },
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const database = new Databases(client);
export { database, appwriteConfig, client };
