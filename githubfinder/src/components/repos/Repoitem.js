import React from 'react'
import PropTypes from 'prop-types'
import './repoitem.css'

const Repoitem = ({repo}) => {
    return (
        <div className="repoitems">
        <ul>
        <li>
            <h3> 
    <a href={repo.html_url} className="links">{repo.name}</a>                
            </h3>
            </li>
            </ul>
        </div>
    )
}


Repoitem.propTypes={
    repo:PropTypes.object.isRequired
};

export default Repoitem