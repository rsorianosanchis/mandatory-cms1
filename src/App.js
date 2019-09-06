import React,{useEffect,useState} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ArticlesList from './components/ArticlesList.js';
import Pagination from './components/Pagination.js';
import AuthorsList from './components/AuthorsList.js';
import ViewArticle from './components/ViewArticle.js';
import Header from './components/Header.js';
import axios from 'axios';


function App() {

  const [articlesList,storeArticles] = useState([]);
  const [authorsList,storeAuthors] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  //Vi sätter antal 10 som default
  const [postsPerPage] = useState(5);
  //jag vill göra att use effect kör liksom componentWillMount, men useEffect påverkar hella tiden :(
  const [firstRender, setRenderStatus] = useState(true);

  
  useEffect(()=>{
    
      const getCockpitArticles = async ()=>{
        if (firstRender === true) {
          setLoading(true);
          const result = await axios.get('http://localhost:8080/api/collections/get/articles');
          console.log(result.data.entries);
          storeArticles(result.data.entries);
          setLoading(false);
          setRenderStatus(false)
        }
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
  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = articlesList.slice(indexOfFirstPost, indexOfLastPost)
  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <Header/>
      <main className='container mt-5'>
        <Switch>
          <Route 
            exact path='/' 
            render={()=>(
              <div className= 'container mt-5'>
                <ArticlesList
                  articles={currentArticles}
                  loading={loading}
                />
                <Pagination
                  postsPerPage = {postsPerPage}
                  totalPosts = {articlesList.length}
                  paginate = {paginate}

                />
              </div>
            )}
          />
          <Route 
            path='/article/:_id' 
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
            path='/authorslist' 
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
