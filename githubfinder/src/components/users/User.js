import React, {Fragment,useEffect,useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext'
import './user.css'


const User=({match})=> {

    const githubContext=useContext(GithubContext)
    const {repos,getuserrepos, user,loading,getuser}=githubContext;
    
    useEffect(()=>{
        getuser(match.params.login)
        getuserrepos(match.params.login)
        // eslint-disable-next-line
    },[]);

    // componentDidMount(){
                
    // }
    

        const{name,avatar_url,location,bio,login,hmtl_url,followers,following,public_repos,public_gists,hireable}=user;
    //    const{loading ,repos}=this.props;
       if(loading) return <Spinner />;
       return (
           
            <Fragment>
    <div className="user">  
        <img className="img" src={avatar_url}></img>  

      <h2> <img src="https://img.icons8.com/android/15/000000/user.png"  alt="name"/> {name}</h2> 
  <div className="location">  <h4><img src="https://img.icons8.com/pastel-glyph/11/000000/worldwide-location--v1.png" alt="location"/> {location}</h4> </div>
    <p className="bio">{bio}</p>
</div>
<div className="followers"><div  className="first_div d">Followers <span className="firstspan">{followers}</span></div><div className="second_div d">Following  <span className
="secondspan">{following}</span></div>< /div>

<div className="repos">repositories <span className="repospan"> {public_gists}</span></div>
       <Repos repos={repos}/>
            </Fragment>
        )
    
}

export default User;
