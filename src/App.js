import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { FooterBar } from "./components/FooterBar";
import GameJoinSuccess from "./components/GameJoinSuccess";
import GameModal from "./components/GameModal";
import { NavbarHeader } from "./components/NavbarHeader";
import { Sidebar } from "./components/Sidebar";
import Congurational from "./pages/Congurational";
import { CreateGame } from "./pages/CreateGame";
import { Dashboard } from "./pages/Dashboard";
import JoinGame from "./pages/JoinGame";
import Login from "./pages/Login";
import { Matches } from "./pages/Matches";
import NotFound from "./pages/NotFound";
import { Profile } from "./pages/Profile";
import { Ratings } from "./pages/Ratings";
import RoleSelect from "./pages/RoleSelect";
import SignUp from "./pages/SignUp";
import { Stats } from "./pages/Stats";

function isLoggedIn() {
	if (localStorage.getItem("user")) {
		return true;
	}

	return false;
}

function requireAuth(nextState, replace) {
	if (!isLoggedIn()) {
		replace({
			pathname: "/login",
		});
	}
}
function App({ location }) {
	return (
		<>
			{!isLoggedIn() && <Route exact path="/login" component={Login} />}
			<NavbarHeader location={location} />
			<div className="d-flex bg-light vh-100">
				<Sidebar location={location} />
				<div className="flex-grow-1 scroll-box py-0 px-0 m-0">
					<Switch>
						<Route
							exact
							path="/"
							render={() =>
								!isLoggedIn() ? <Redirect to="/login" /> : <Dashboard />
							}
						/>
						<Route exact path="/role-select" component={RoleSelect} />
						<Route exact path="/create-game" component={CreateGame} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/join-game/:gameId" component={JoinGame} />
						<Route exact path="/matches" component={Matches} />
						<Route exact path="/stats" component={Stats} />
						<Route exact path="/ratings" component={Ratings} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/modal" component={GameModal} />
						<Route exact path="/game-success" component={Congurational} />
						<Route
							exact
							path="/join-success"
							component={GameJoinSuccess}
						/>
						<Route exact path="/404" component={NotFound} />
						<Route exact render={() => <Redirect to="/404" />} />
					</Switch>
				</div>
			</div>
			<FooterBar location={location} />
		</>
	);
}

export default withRouter(App);
