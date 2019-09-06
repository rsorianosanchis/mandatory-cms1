import React,{Fragment} from 'react';
import ArticleItem from './ArticleItem.js';

function ArticlesList ({articles}){
    return (
        <Fragment>
            <h1 className='text-center'>Lista över artiklar</h1>
            <form>
                <fieldset>
                    <div class="form-group">
                        <label for="exampleSelect1">Artiklar per sidan</label>
                        <select className="form-control" id="exampleSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </fieldset>
            </form>
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

