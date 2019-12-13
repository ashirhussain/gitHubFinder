import React from 'react'
import Repoitem from './Repoitem'
import PropTypes from 'prop-types'
import './repos.css'


const Repos = ({repos}) => {
    return <div className="repolist">{repos.map(repo => <Repoitem repo={repo} key={repo.id} />)}</div>
}
Repos.protoType={
repos:PropTypes.array.isRequired
};
export default Repos;