/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Router } from "@solidjs/router";
import Routing from "./components/routing/Routing";
import { createSignal } from "solid-js";
import { AuthenticationProvider } from "./components/providers/AuthenticationProvider";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

const [authenticated, setAuthenticated] = createSignal(false);

render(
  () => (
    <AuthenticationProvider.Provider
      value={{
        isAuthenticated: () => authenticated(),
        setAuthenticated: (value: boolean) => setAuthenticated(value),
      }}
    >
      <Router>{Routing.routes}</Router>
    </AuthenticationProvider.Provider>
  ),
  root!,
);
