import React, { Fragment, useContext, useEffect, useState } from 'react';

import SearchContext from '../context/search/searchContext';
import SearchItem from '../components/search/SearchItem';
import Spinner from '../components/layout/Spinner';

const Search = (props) => {

  const [search, setSearch] = useState('');

  const searchContext = useContext(SearchContext);
  const { searchedUsers, searching, searchUsers, searchTerm, findResults } = searchContext;

  const querySearch = props.location.search.toString().split('=')[1];
  // console.log(querySearch);

  const onSearch = (e) => {
    setSearch(e.target.value);
  }

  const searchFormSubmit = (e) => {
    e.preventDefault();
    searchUsers({ search });
  }

  useEffect(() => {
    // console.log('searching', searching);
  }, [searchedUsers])


  return (
    <Fragment>
      <div className="search-section">
        <div className="search-bar">
          <form onSubmit={searchFormSubmit} className="jov-search-form">
            <input onChange={onSearch} value={search} type="text" className="search-field" placeholder="search" />
            {/* <input onChange={onSearch} value={querySearch ? querySearch : '' } type="text" className="search-field" placeholder="search" /> */}
            <button type="submit" label="search" className="search-btn">Search users</button>
          </form>
          <div className="filter-options">
            <div className="jov-btn-radio">
              <div>Filter by</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="all" autoComplete="off" required/>
              <div>All</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="enthusiast" autoComplete="off" required/>
              <div>Enthusiast</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="professional" autoComplete="off" required/>
              <div>Professional</div>
            </div>
            <div className="jov-btn-radio">
              <input type="radio" name="filter" value="page" autoComplete="off" required/>
              <div>Page</div>
            </div>
          </div>

        </div>
      </div>

      <div className="jov-container">
        <div className="jov-results">
          {searching ? (<Spinner/>) : 
            (searchedUsers.map((user, index) => (
              <SearchItem key={index} user={user} />
            )))
          }
        </div>
      </div>
      
    </Fragment>
  )
}


export default Search;
