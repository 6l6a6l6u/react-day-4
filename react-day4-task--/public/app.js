import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import UserList from './UserList';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import Profile from './Profile';
import EditProfile from './EditProfile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/users">List Users</Link>
              </li>
              <li>
                <Link to="/create-user">Create User</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/users" component={UserList} />
            <Route exact path="/create-user" component={CreateUser} />
            <Route exact path="/edit-user/:id" component={EditUser} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/edit-profile/:id" component={EditProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
