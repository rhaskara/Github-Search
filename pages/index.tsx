import { useState } from 'react';
import { Repository, ApiResponse } from '../interfaces';

const SearchRepositories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleSearch = async () => {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${encodedSearchTerm}`
    );
    const data: ApiResponse = await response.json();
    setRepositories(data.items);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.html_url}>
            <a href={repository.html_url}>{repository.name}</a>
            <p>{repository.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRepositories;