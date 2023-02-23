export interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export interface ApiResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
  errors: ApiErrorResponse[];
}

export interface ApiErrorResponse {
  message: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export interface ErrorComponentProps {
  message: string;
};

export interface LoadingComponentProps {
  isLoading: boolean;
};

export interface SearchComponentProps {
  setSearchTerm: () => void;
  onKeyDown: () => void;
  handleSearch: (page: number) => void;
  searchPlaceholder: string;
};

export interface ListComponentProps {
  repositories: Repository[];
  loading: boolean;
  errorEvent: string;
  cleanSearch: Boolean;
};
