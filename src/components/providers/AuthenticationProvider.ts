import { createContext } from "solid-js";

export type AuthenticationProviderValue = {
  isAuthenticated: () => boolean;
  setAuthenticated: (value: boolean) => void;
};

export const AuthenticationProvider =
  createContext<AuthenticationProviderValue>({
    isAuthenticated: () => false,
    setAuthenticated: () => {},
  });
