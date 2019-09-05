import React,{Fragment} from 'react';
import ArticleLi from './ArticleLi.js';

function ArticlesList ({articles}){
    return (
        <Fragment>
            <h1 className='text-center'>Lista över artiklar</h1>
            <ul className='list-group mt-5'>
                {articles.map(article=>(
                    <ArticleLi article={article}/>
                ))}
            </ul>
        </Fragment>
    )
};

export default ArticlesList;

