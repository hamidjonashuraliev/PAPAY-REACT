import React, { createContext } from "react";
import io from "socket.io-client";
import { serverApi } from "../../lib/config";

export const socket = io(serverApi);
export const SocketContext = createContext();
