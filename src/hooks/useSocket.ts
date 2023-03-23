import { useState } from "react";
import { socketInstance } from "@/servers/socket";
import type { Socket } from "socket.io-client";

const useSocket = () => {
  const [socket] = useState<Socket>(socketInstance);
  // const [isConnected, setIsConnected] = useState(socket.connected);

  // useEffect(() => {
  //   const onConnect = () => setIsConnected(true);
  //   const onDisconnect = () => setIsConnected(false);

  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, [socket]);

  return { socket };
};

export default useSocket;
