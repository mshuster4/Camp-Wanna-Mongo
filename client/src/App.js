import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import MathGame from "./pages/MathGame";
import Trivia from "./pages/Trivia";
import Memory from "./pages/Memory";
import MinesweeperGame from "./pages/MinesweeperGame";
import Home from "./pages/Home";
import HtmlHeroes from "./pages/HtmlHeroes";
import CssCrusaders from "./pages/CssCrusaders";
import JsJunkies from "./pages/JsJunkies";
import DataDivers from "./pages/DataDivers";
import { Route, Switch } from "react-router-dom";


export default class App extends React.Component {

  goTo = (route) => {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  isAuthenticated = () => {
    return this.props.auth.isAuthenticated();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    return (
    <div>
      <NavBar
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/MathGame" component={MathGame} />
          <Route exact path="/Trivia" component={Trivia} />
          <Route exact path="/MinesweeperGame" component={MinesweeperGame} />
          <Route exact path="/Memory" component={Memory} />
          <Route exact path="/HtmlHeroes" component={HtmlHeroes} />
          <Route exact path="/CssCrusaders" component={CssCrusaders} />
          <Route exact path="/JsJunkies" component={JsJunkies} />
          <Route exact path="/DataDivers" component={DataDivers} />
        </Switch>
      </div>
    );
  }

}