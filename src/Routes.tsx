import * as React from "react";
import { Route, Switch } from "react-router";
import WelcomePage from "./WelcomePage";

export function getRoutes() {
	return (
		<Switch>
			<Route exact path="/" component={WelcomePage} />
		</Switch>
	);
}