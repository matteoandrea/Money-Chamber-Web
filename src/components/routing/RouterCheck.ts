import { RouteLoadFuncArgs } from "@solidjs/router";

export default interface RouterCheck {
  apply(routeArgs: RouteLoadFuncArgs): void;
}
