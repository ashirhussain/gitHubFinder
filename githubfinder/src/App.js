import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
// import axios from 'axios'
import Alert from './components/layout/Alert'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Notfound from './components/pages/Notfound'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import './App.css';

const App = () => {
  
  // const [user, setuser] = useState({})
  // const [repos, setrepos] = useState([])
  // const [loading, setloading] = useState(false)
  // const [alert, setalert] = useState(null)


  // state = {
  //   users: [],
  //   user:{},
  //   repos:[],
  //   loading: false,
  //   alert: null
  // };
  // async componentDidMount(){
  //   this.setState({loading:true});
  //   const res =await axios.get("https://api.github.com/users");
  //   this.setState({users:res.data,loading:false})
  //   console.log(res.data)
  // }
  
 
  
  //request for single user
  
  

  // const { users, user, loading, alert, repos } = this.state;
  return (
  <GithubState>
  <AlertState>
  <Router> 
    <div className="App">
  <Navbar title='GitHub Finder' />
  <Alert/>
    </div>
    <Switch><Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About} />
      <Route exact path='/user/:login' component={User} />
      <Route component={Notfound}/>
    </Switch>

  </Router>
  </AlertState>
  </GithubState>
  );


}

export default App;
