import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
SEARCH_USERS,
SET_LOADING,
CLEAR_USERS,
GET_USER,
GET_REPOS
} from '../types';

const GithubState=props=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState);

//searchusers
const searchUsers = async t => {

    setloading()
    const res = await axios.get(`https://api.github.com/search/users?q=${t}`);
    dispatch({
        type:SEARCH_USERS,
        payload:res.data.items
    });
    // setusers(res.data.items)
    // setloading(false)
    // this.setState({ users: res.data.items, loading: false })
    // console.log(res.data)
  }
  const getuser = async (username) => {
    setloading()
    // this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);

    dispatch({
        type:GET_USER,
        payload:res.data
        })

    // this.setState({ user: res.data, loading: false })
  }
  const getuserrepos = async (username) => {

    setloading()
    // this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);


dispatch({
    type:GET_REPOS,
    payload:res.data
})
    // setrepos(res.data)
    // setloading(false)

    // this.setState({ repos: res.data, loading: false })
  }

 const clear = () => dispatch({type:CLEAR_USERS});
//setloading
const setloading=()=>dispatch({type:SET_LOADING});
return( <GithubContext.Provider
value={{
users:state.users,
user:state.user,
loading:state.loading,
repos:state.repos,
searchUsers,
clear,
getuser,
getuserrepos

}}
>
{props.children}
</GithubContext.Provider>
);
};
export default GithubState;