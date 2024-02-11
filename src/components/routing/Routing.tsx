// import Router from "../components/Router";
import { RouteDefinition, RouteLoadFuncArgs } from "@solidjs/router";
import { lazy } from "solid-js";
import AuthenticatorRouterCheck from "./checkers/AuthenticatorRouterCheck";
import RevokeAuthenticationRouterAction from "./actions/RevokeAuthenticationRouterAction";

export default class Routing {
  static home: RouteDefinition = {
    path: "/",
    component: lazy(() => import("../../pages/home/Home")),
    load: (routeArgs: RouteLoadFuncArgs) => {
      new AuthenticatorRouterCheck().apply(routeArgs);
    },
  };
  static login: RouteDefinition = {
    path: "/login",
    component: lazy(() => import("../../pages/login/Login")),
    load: (routeArgs: RouteLoadFuncArgs) => {
      new RevokeAuthenticationRouterAction().apply();
    },
  };
  static notFound: RouteDefinition = {
    path: "*",
    component: lazy(() => import("../../pages/notFound/NotFound")),
  };

  static routes: RouteDefinition[] = [this.home, this.login, this.notFound];
}
