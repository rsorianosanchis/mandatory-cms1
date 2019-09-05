import React,{Fragment} from 'react';
import ArticleItem from './ArticleItem.js';

function ArticlesList ({articles}){
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

