import { useNavigate, Navigator } from "@solidjs/router";
import { createSignal, useContext } from "solid-js";
import {
  AuthenticationProvider,
  AuthenticationProviderValue,
} from "../../components/providers/AuthenticationProvider";
import Routing from "../../components/routing/Routing";

export default class HomeLogic {
  constructor() {
    this._provider = useContext<AuthenticationProviderValue>(
      AuthenticationProvider,
    );

    this._navigate = useNavigate();
  }

  _navigate: Navigator;
  _provider: AuthenticationProviderValue;

  handleSubmit(event: SubmitEvent, counter: number) {
    event.preventDefault();
    console.log("CAR", counter);

    switch (counter) {
      case 0:
        this._login();
        break;
      case 1:
        this._create();
        break;
      // Add more cases for other buttons if needed
      default:
        break;
    }
  }

  _login() {
    console.log("Before", this._provider.isAuthenticated);
    this._provider.setAuthenticated(true);
    console.log("after", this._provider.isAuthenticated);

    this._navigate(Routing.home.path);
  }

  _create() {
    this._navigate(Routing.notFound.path);
  }
}
