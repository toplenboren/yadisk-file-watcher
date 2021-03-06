import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Auth from "./components/Auth/Auth";
import Client from "./components/Client/Client";
import Footer from "./components/Footer/Footer";
import AuthCheck from "./components/AuthCheck/AuthCheck";

function App() {
  return (
    <React.Fragment>
        <Header/>
        <Switch>
            <Route path="/" exact component = {Auth}/>
            <Route path="/auth" component={AuthCheck}/>
            <Route path="/app" component = {Client}/>
        </Switch>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
