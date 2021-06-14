import React from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component{
  render(){
  return (
    <Router>
    <Switch>
          <Route path="/">
          <div className="container">
            <div className="col-md-4 offset-md-4">
            <Header />
            <ContactForm />
             </div>
           </div>
          </Route>
      </Switch>
    </Router>
  );
}
}
export default App;
