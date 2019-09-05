import React,{Fragment} from 'react';
import AuthorItem from './AuthorItem.js';


function AuthorsList ({authors}){
    return(
        <Fragment>
            <h1 className='text-center'>Lista med författare</h1>
            <div className='list-group mt-5'>
                {authors.map(author => (
                    <AuthorItem
                        key={author._id}
                        author={author}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default AuthorsList;