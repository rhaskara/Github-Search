import { useState, useEffect, useCallback, useRef } from 'react';
import Pagination from '../components/Pagination';
import { ThemeProvider } from 'styled-components';
import { Repository, ApiResponse } from '../interfaces';
import { PAGE_SIZE } from '../utilities/constants';
import theme from '../styles/theme';
import { PageContainer, PageTitle, SearchButton, SearchContainer, SearchInput } from '../styles/globalStyledComponents';
import LoadingComponent from '../components/LoadingComponent';
import { ListComponent } from '../components/ListComponent';

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
  const cleanSearch = useRef<Boolean>(true);

  const searchForRepositories = useCallback((page: number, pageSize: number) => {
    if (searchTerm && searchTerm?.length > 0) {
      if (cleanSearch.current) {
        cleanSearch.current = false;
      }
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
      return;
    }
  }, [searchTerm]);

  const handleSearch = useCallback((page: number) => {
    if (!searchThrottleTimeout) {
      setError(undefined);
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
        <PageTitle>
          Search Github Repositories
        </PageTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for a repository..."
          />
          <SearchButton
            disabled={searchTerm?.length < 1}
            onClick={() => handleSearch(1)}
          >
            Search
          </SearchButton>
        </SearchContainer>
        <LoadingComponent isLoading={loading} />
        <ListComponent
          repositories={repositories}
          loading={loading}
          errorEvent={errorEvent}
          cleanSearch={cleanSearch.current}
        />
        { repositories?.length > 0 && totalCount > PAGE_SIZE && (
          <Pagination currentPage={currentPage} totalPages={totalCount/PAGE_SIZE || 1} onPageChange={setCurrentPage}/>
        )}
      </PageContainer>
    </ThemeProvider>
  );
};

export default SearchRepositories;
