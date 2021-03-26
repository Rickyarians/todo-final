// import Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import css bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Page Auth
import { LoginPage } from "./pages/auth/login";
import { RegisterPage } from "./pages/auth/register";
// Page Main
import { AddTodoPage } from "./pages/todo/add-todo";
import { DeleteTodoPage } from "./pages/todo/delete-todo";
import { DetailTodoPage } from "./pages/todo/detail-todo";
import { UpdateTodoPage } from "./pages/todo/update-todo";
import { ListTodoPage } from "./pages/todo/list-todo";

function App() {
	return (
		<Router>
			<Switch>
				<Route component={LoginPage} path="/login" />
				<Route component={RegisterPage} path="/register" />
				<Route component={ListTodoPage} path="/" exact />
				<Route component={DetailTodoPage} path="/todo/:id" />
				<Route component={AddTodoPage} path="/add" />
				<Route component={UpdateTodoPage} path="/update/:id" />
				<Route component={DeleteTodoPage} path="/delete/:id" />
			</Switch>
		</Router>
	);
}

export default App;
