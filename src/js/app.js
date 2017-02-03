import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Layout from "./pages/Layout";
import Item from "./pages/Item";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
	<Route path="/" component={Layout}>
	  <IndexRoute component={Home} />
	  <Route path="category/:category" name="category" component={Category} />
	  <Route path="category/:category/:item" name="item" component={Item} />
	</Route>
  </Router>,
app);