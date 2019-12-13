import React, { Fragment, useContext, useEffect } from 'react';

import SearchContext from '../context/search/searchContext';

import SearchItem from '../components/search/SearchItem';

const Search = () => {

  const searchContext = useContext(SearchContext);

  const { searchedUsers, searching } = searchContext;

  useEffect(() => {
    console.log('component reloaded')
  }, [searchedUsers])

  return (
    <Fragment>
      <section className="body">
        <div className="container">
          {/* <h1>Search</h1> */}
          <div className="search-results">
            {!searchedUsers ? (<h1>Loading users...</h1>) : 
            (searchedUsers.map((user, index) => (
              <SearchItem key={index} user={user} />
            )))}
          </div>
        </div>
      </section>
    </Fragment>
  )

};


export default Search;
