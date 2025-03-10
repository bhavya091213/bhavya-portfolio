import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context
interface AppContextType {
  pressed: boolean;
  setPressed: (pressed: boolean) => void;
}

// Create the Context with a default value (null, to be set in provider)
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [pressed, setPressed] = useState<boolean>();

  return (
    <AppContext.Provider value={{ pressed, setPressed }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
