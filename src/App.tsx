import React from 'react';
import {Switch, Route, NavLink, BrowserRouter as Router} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar,Homepage,Exchanges,Cryptocurrencies,CryptoDetails,News} from './components/'
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>  
                <Route exact path='/'><Homepage/></Route>
                <Route exact path='/exchanges'><Exchanges/></Route>
                <Route exact path='/cryptocurrencies'><Cryptocurrencies/></Route>
                <Route exact path='/crypto/:coinId'><CryptoDetails/></Route>
                <Route exact path='/news'><News/></Route>
              </Switch>
            </div>
          </Layout>
        </div>
        <div className="footer">

        </div>
      </div>
    </Router>
  );
}

export default App;
