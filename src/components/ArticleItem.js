import React from 'react';
import {Link} from 'react-router-dom';

function ArticleItem({article}) {
    return(
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <h5 className="mb-1">{article.title}</h5>
            <p className="mb-1">{article.author[0].display}</p>
            <small>{article.published_on}</small>
            <span ><Link to={`/article/${article._id}`} className="btn btn-outline-secondary">Se Inlägg</Link></span>
        </li>
    )
}

export default ArticleItem;