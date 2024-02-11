import { useContext } from "solid-js";
import RouterAction from "../RouterAction";
import {
  AuthenticationProvider,
  AuthenticationProviderValue,
} from "../../providers/AuthenticationProvider";

export default class RevokeAuthenticationRouterAction implements RouterAction {
  apply(): void {
    const provider = useContext<AuthenticationProviderValue>(
      AuthenticationProvider,
    );

    provider.setAuthenticated(false);
  }
}
