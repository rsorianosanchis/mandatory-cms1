import React from 'react';
import { Link } from 'react-router-dom';

function AuthorItem({ author }) {
    return (
        <div className="card mb-5" >
            <h3 className="card-header">{author.name}</h3> 
            <div>
                <img alt='Card image' src={`http://localhost:8080/${author.avatar.path}`} width="100%"/> 
            </div>
            <div className="card-body">
                <p className="card-text">{author.description}</p>
            </div>
        </div>      
    )
}

export default AuthorItem;