import React from 'react';
import { Link } from 'react-router-dom';

function AuthorItem({ author }) {
    return (
        <div className="card mb-3" >
            <h3 className="card-header">{author.name}</h3> 
            <img alt='' src={`../${author.avatar.path}`}/> 
            <div className="card-body">
                <p className="card-text">{author.description}</p>
            </div>
        </div>      
    )
}

export default AuthorItem;