import './App.css';
import Login from './Login';
import {BrowserRouter as Router,Link, Route, Switch} from "react-router-dom";
import Register from './Register.js'
import ResetPassword from './ResetPassword';
import Home from './Home';
import Reset from './Reset';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
function App() {
  let history = useHistory()
  const [token, setToken] = useState(false)
  let fetchtoken = ()=>{
    {window.localStorage.getItem("login_app_token")? setToken(true):setToken(false)}
    // window.location.reload();

  }
  useEffect(() => {
    fetchtoken()
    console.log(token)
  }, [])
  return (
    <Router>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        </ul>
        <div class="nav-item">
          {token?<button className='btn navbar-btn btn-danger navbar-right pull-right' onClick={()=>{fetchtoken();window.localStorage.removeItem("login_app_token");    window.location.reload();
}}>Logout</button>:<Link class="btn btn-primary" to="/login">Login</Link>}
        </div>
    </div>
  </div>
</nav>
      <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/login" component={Login} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/reset-password" component={ResetPassword} exact={true}/>
        <Route path="/reset" component={Reset} exact={true}/>  
      </Switch>
    </Router>
  );
}

export default App;
