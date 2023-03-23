import { io } from "socket.io-client";
const { MODE } = import.meta.env;

const URL = MODE === "production" ? "" : "http://localhost:3001";

if (MODE === "development") console.log("Instance Called!");

export const socketInstance = io(URL, { autoConnect: false });
