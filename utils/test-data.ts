import { ChatRoom } from "./types";

export const chatRooms: ChatRoom[] = [
  {
    id: "1",
    title: "Chat Room 1",
    description: "Chat Room 1 Description",
    isPrivate: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Chat Room 2",
    description: "Chat Room 2 Description",
    isPrivate: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
