import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Harshit",
    email: "harshitpachori@gmail.com",
  },
});

export default UserContext;