import React from 'react';
import { Link } from 'react-router-dom';



function ViewArticle({data}) {
    console.log(data);
    
    return (
        <div className="jumbotron">
            <h1 className="display-3">{}</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Link to={`/articleslist`} className="btn btn-primary btn-lg"  role="button">Learn more</Link>
                </p>
        </div>
    )
}

export default ViewArticle;