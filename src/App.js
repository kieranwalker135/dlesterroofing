import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Components/NavigationBar'
import Footer from './Components/Footer'
import { Home } from './Pages/Home'
import { Services } from './Pages/Services'
import { Contact } from './Pages/Contact'
import { NoMatch } from './Pages/NoMatch'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navigation />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  };
}

export default App;
