import { createContext } from "react";

export const MyContext = createContext<{name: string}>({name: "Codesden"});