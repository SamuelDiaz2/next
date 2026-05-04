"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const AppContext = createContext<{ nombre: string; setNombre: (value: string) => void } | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState(" Elias");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}