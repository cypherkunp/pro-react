import Input from 'components/Input/Input';
import './SearchResults.scss';

import { searchSuperhero } from 'services/superhero.api';
import { useState, useEffect } from 'react';

function SearchResults() {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    const search = async () => {
      console.log('[SearchResults.useEffect.status]: Searching Superhero');
      const searchSuperheroResponse = await searchSuperhero(searchString);
      console.log('[SearchResults.useEffect.searchSuperheroResponse]: ', searchSuperheroResponse);
    };
    search();
  }, []);

  const handleOnSearchInput = (event: any) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="search-bar">
      <h2>Search Superheroes</h2>
      {/* <Input type="filter" value={searchString} onChange={handleOnSearchInput} /> */}
    </div>
  );
}

export default SearchResults;
