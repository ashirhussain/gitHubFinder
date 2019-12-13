import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import './useritem.css'

 const Useritem =({user: {login, avatar_url, html_url}})=> {

        // const { login, avatar_url, html_url } = this.props.user;
        return (
            <div className="card">
                <img className="image" src={avatar_url} alt="" />
                <h3>{login}</h3>
              <div className="more_link">   <Link to={`/user/${login}`} style={{textDecoration:"none"}}>more</Link></div>
            
            </div>
        )
    
}

Useritem.propTypes={
    user:PropTypes.object.isRequired,
}
export default Useritem;
