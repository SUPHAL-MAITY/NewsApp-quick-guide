import React,{useEffect,useState}  from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner.js';
// short form impt
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
// document.title=`${capitalizeFirstLetter(props.category)}-News App`;






 const News =(props)=>  {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0)



  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  
   const updateNews =async()=>{
    props.setProgress(10);
    setLoading(true)
    const  url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=794ebfdbb4e54382a0708bc721beaffe&page=${page}&pageSize=${props.pageSize}`;
    let data= await fetch(url);
    props.setProgress(50);
    let parsedData= await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);

  }



  
  
  
  useEffect(() => {

    document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
    updateNews(); 
    // eslint-disable-next-line
}, [])




  const fetchMoreData = async ()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=794ebfdbb4e54382a0708bc721beaffe&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults);
    


  }


 


  
    return (
      
            <>
            <h1 className="text-center">News App</h1>
            {loading  && <Spinner/>}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            >
            <div className="container my-3">  
            
            <div className="row">
            
                  { articles.map((element)=>{
                    return  <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt}/>
            
                      </div>
              
            })}
             </div>
             </div>


            </InfiniteScroll>
              
     
     
           

</>
        
      
    )
  }



News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;

