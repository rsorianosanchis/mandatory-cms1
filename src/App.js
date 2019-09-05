import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ArticlesList from './components/ArticlesList.js';
import AuthorsList from './components/AuthorsList.js';
import ViewArticle from './components/ViewArticle.js';
import Header from './components/Header.js';
import axios from 'axios';


function App() {

  const [articles,storeArticles] = useState([]);

  useEffect(()=>{
    const getCockpitArticles = async ()=>{
      const result = await axios.get('http://localhost:8080/api/collections/get/articles');
      console.log(result.data.entries);
      storeArticles(result.data.entries);
    }
    getCockpitArticles();
  },[]);

  return (
    <Router>
      <Header/>
      <main className='container mt-5'>
        <Switch>
          <Route exact path='/articleslist' component={ArticlesList} />
          <Route exact path='/article/:_id' component={ViewArticle} />
          <Route exact path='/authorslist' component={AuthorsList}/>
        </Switch>
      </main>
      <p className='mt-4 p2 text-center'>rsorianosanchis@gmail.com</p>
    </Router>
  );
}

export default App;
