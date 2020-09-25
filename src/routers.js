import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import { AboutPage } from './views/about';
import { ContactsPage } from './views/contacts';
import { HomePage } from './views/home';
import { LegalBases } from './views/legalbases';
import { Recipes } from './views/recipes';


export const AppRouter = () => {
  return (
    <Router>
      <div>
          <Switch>
          <Route path='/about' component= {AboutPage} />
          <Route path='/contacts' component= {ContactsPage} />
          <Route path='/legalbases' component= {LegalBases} />
          <Route path='/home' component={HomePage} />
          <Route path='/recipes' component= {Recipes} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}