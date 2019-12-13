import React from 'react'
import './navbar.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Navbar =(props)=>{
    
    
        return (
            <div className='navbar'>
                <h1><img style={{paddingTop:"6px"}} src="https://img.icons8.com/ios-filled/26/000000/github.png" /> {props.title}</h1>
                
<div className="links"> <p> <Link to="/" className="link1">Home</Link><Link to="/about" className="link2">About</Link></p></div>
                
            </div>
        )
    
}
Navbar.propTypes={
    title:PropTypes.string.isRequired
};
export default Navbar
