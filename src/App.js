import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ArticlesList from './components/ArticlesList.js';
import AuthorsList from './components/AuthorsList.js';
import ViewArticle from './components/ViewArticle.js';
import Header from './components/Header.js';


function App() {
  return (
    <Router>
      <Header/>
      <main className='container mt-5'>
        <Switch>
          <Route exact path='/articleslist' component={ArticlesList} />
          <Route exact path='/articleslist/:_id' component={ViewArticle} />
          <Route exact path='/authorslist' component={AuthorsList}/>
        </Switch>
      </main>
      <p className='mt-4 p2 text-center'>rsorianosanchis@gmail.com</p>
    </Router>
  );
}

export default App;
