import { RouteLoadFuncArgs, useNavigate } from "@solidjs/router";
import RouterCheck from "../RouterCheck";
import { useContext } from "solid-js";
import {
  AuthenticationProvider,
  AuthenticationProviderValue,
} from "../../providers/AuthenticationProvider";

export default class AuthenticatorRouterCheck implements RouterCheck {
  apply(routeArgs: RouteLoadFuncArgs): void {
    const provider = useContext<AuthenticationProviderValue>(
      AuthenticationProvider,
    );

    console.log("AUTH", provider);

    if (provider.isAuthenticated()) return;

    const navigate = useNavigate();
    navigate("/login", { replace: true });
  }
}
