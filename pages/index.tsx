import { useState, useEffect, useCallback } from 'react';
import Pagination from '../components/Pagination';
import { ThemeProvider } from 'styled-components';
import { Repository, ApiResponse } from '../interfaces';
import { PAGE_SIZE } from '../utilities/constants';
import theme from '../styles/theme';
import ErrorComponent from '../components/ErrorComponent';
import { PageContainer, PageTitle } from '../styles/globalStyledComponents';

const SearchRepositories = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchThrottleTimeout, setSearchThrottleTimeout] = useState<number | null>(
    null
  );
  const [totalCount, setTotalCount] = useState<number>(0);
  const [errorEvent, setError] = useState<string|undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchForRepositories = useCallback((page: number, pageSize: number) => {
    if (searchTerm) {
      setLoading(true);
      const encodedSearchTerm = encodeURIComponent(searchTerm);

      fetch(`https://api.github.com/search/repositories?q=${encodedSearchTerm}&per_page=${pageSize}&page=${page}`)
        .then((response) => response.json())
        .then((data: ApiResponse) => {
          if (data?.errors) {
            setError(data.errors[0].message);
            setRepositories([]);
          } else {
            setRepositories(data.items);
            setTotalCount(data.total_count);
          }
        })  
        .catch((error) => {
          setError(error.message);
          setRepositories([]);
        })
        .finally(() => setLoading(false));
    } else {
      setRepositories([]);
    }
  }, [searchTerm]);

  const handleSearch = useCallback((page: number) => {
    if (!searchThrottleTimeout) {
      searchForRepositories(page, PAGE_SIZE);
      const timeoutId = window.setTimeout(() => {
        setSearchThrottleTimeout(null);
      }, 1000);
      setSearchThrottleTimeout(timeoutId);
    }
  }, [searchForRepositories, searchThrottleTimeout]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSearch(1);
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    window.scrollTo(0,0);
    handleSearch(currentPage);
  }, [currentPage]);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        { errorEvent
            ? <ErrorComponent message={errorEvent} />
            : <div>
                <PageTitle>
                  Search Github Repositories
                </PageTitle>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search for a repository..."
                />
                <button onClick={() => handleSearch(1)}>Search</button>
                {loading && <div style={{
                  position: 'fixed',
                  display: 'block',
                  zIndex: 9999,
                  width: '100vw',
                  height: '100vh',
                  backgroundColor: 'white',
                }}>Loading...</div>}
                { repositories?.length === 0 && !loading && !errorEvent && (
                  <div>No repositories found.</div>
                )}
                { repositories?.length > 0 && (
                  <ul>
                    {repositories?.map((repository) => (
                      <li key={repository.html_url}>
                        <a href={repository.html_url}>{repository.name}</a>
                        <p>{repository.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
                { repositories?.length > 0 && (
                  <Pagination currentPage={currentPage} totalPages={totalCount/PAGE_SIZE || 1} onPageChange={setCurrentPage}/>
                )}
              </div>
        }
      </PageContainer>
    </ThemeProvider>
  );
};

export default SearchRepositories;
