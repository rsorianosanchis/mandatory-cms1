import React from 'react';
import { Link } from 'react-router-dom';
const ReactMarkdown = require('react-markdown');



function ViewArticle({data}) {
    
    return (
        <div className="jumbotron">
            <h1 className="display-3">{data.title}</h1>
            <p className="display-4">{data.author[0].display}</p>
            <p className="lead"><ReactMarkdown>{data.body}</ReactMarkdown></p>
            <hr className="my-4"/>
                <p>Skapades {data.published_on} </p>
                <p className="lead">
                <Link to={`/articleslist`} className="btn btn-outline-success"  role="button">Gå ut</Link>
                </p>
        </div>
    )
}

export default ViewArticle;