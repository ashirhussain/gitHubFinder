import React, {useContext}from 'react';
import Useritem from './Useritem';
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'
import './users.css'


const Users=()=> {
    const githubContext=useContext(GithubContext);
   const {loading,users}=githubContext;
    if(loading){
return <Spinner />
    }
    else{

        return (
            <div className="cards"> 
                {users.map(user=>(
    <Useritem key={user.id} user={user} /> 
                ))}
            </div>
        )
    
    }
    
}
// Users.propTypes={
//     loading:PropTypes.bool.isRequired,
//     users:PropTypes.array.isRequired
// };

export default Users;
