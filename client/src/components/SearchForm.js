import React, { useState }  from 'react';
import SearchResult from "./SearchResult";
import axios from "axios";
export const SearchForm = () => {
    const [searchData, setSearchData] = useState([]);
    //this function will use the api for searching beach by name
    // usually it returns several entries with informations like the beach id which will use to link the beach to the beach page to show full info
    // we are going to try to add letter by letter search otherwise we will sent to a page with all entries 
    const searchByName = (query) =>{
        if (query ===''){
            setSearchData([]); 
        }
        else
        {
        axios.get("https://services.surfline.com/search/site?q="+query).then((res)=>{
        const    beachID = res.data[0].hits.hits[0]._id;
        const    beachName = res.data[0].hits.hits[0]._source.name;
     console.log(beachID+"/"+beachName)
     let search = [];
        for (let i = 0; i <res.data[0].hits.hits.length ; i ++) {
          search.push(res.data[0].hits.hits[i]);
        }
    
        setSearchData(search);
    
    }).catch((err)=> console.log(err))
}
    }
    // We gonna render the search results in a div box
    // if there is no entries we might hide the box with css
    // the box will be composed by a div and a mapped UL tag with links holding the beach id
    const renderSearch = ()=>{
        if (searchData.length > 0)
        {
          return (
              <div className="card" style={{zIndex: 30, position:'absolute'}}>
                  <ul className="list-group list-group-flush">
                      <SearchResult {...searchData}/>
                  </ul>
              </div>
          )
        }
    }
    

    return(
        <div>
    <form action ="/" method="get" className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
    <input 
    type="search" 
    className="form-control form-control-dark" 
    placeholder="Search..."
    onChange={e => searchByName(e.target.value)}
    aria-label="Search"/>
    
  </form>
  <div></div>
  {renderSearch()}
  </div>
  )
}
export default SearchForm;