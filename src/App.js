import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ArticlesList from './components/ArticlesList.js';
import AuthorsList from './components/AuthorsList.js';
import ViewArticle from './components/ViewArticle.js';
import Header from './components/Header.js';
import axios from 'axios';


function App() {

  const [articlesList,storeArticles] = useState([]);
  const [authorsList,storeAuthors] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  //Vi sätter mgnd 3 som default

  
  useEffect(()=>{

    const getCockpitArticles = async ()=>{
      setLoading(true);
      const result = await axios.get('http://localhost:8080/api/collections/get/articles');
      console.log(result.data.entries);
      storeArticles(result.data.entries);
      setLoading(false);
    }
    const getCockpitAuthors = async () => {
      const result = await axios.get('http://localhost:8080/api/collections/get/authors');
      console.log(result.data.entries);
      console.log(result.data.entries[0].avatar.path);
      storeAuthors(result.data.entries);
    }
    getCockpitArticles();
    getCockpitAuthors();
  },[]);

  return (
    <Router>
      <Header/>
      <main className='container mt-5'>
        <Switch>
          <Route 
            exact path='/articleslist' 
            render={()=>(
              <ArticlesList
                articles={articlesList}
                loading={loading}
              />
            )}
          />
          <Route 
            exact path='/article/:_id' 
            render={(props)=>{
              console.log(props.match.params._id);
              const itemId = props.match.params._id;
              const selectedArticle = articlesList.filter(article => article._id === itemId);
              console.log( selectedArticle[0]);
                           
              return(
                <ViewArticle
                  data={selectedArticle[0]}
                />
              )
            }} 
          />
          <Route 
            exact path='/authorslist' 
            render={() => (
              <AuthorsList
                authors={authorsList}
              />
            )}
          />
        </Switch>
      </main>
      <p className='mt-4 p2 text-center'>rsorianosanchis@gmail.com</p>
    </Router>
  );
}

export default App;
