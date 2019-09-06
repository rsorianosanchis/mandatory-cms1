import React,{Fragment} from 'react';
import ArticleItem from './ArticleItem.js';

function ArticlesList ({articles,loading}){
    if(loading){
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >Loading ...</div>
            </div>
        )
    }
    return (
        <Fragment>
            <h1 className='text-center'>Lista över artiklar</h1>
            <ul className='list-group mt-5'>
                {articles.map(article=>(
                    <ArticleItem 
                        key={article._id}
                        article={article}
                    />
                ))}
            </ul>
        </Fragment>
    )
};

export default ArticlesList;

